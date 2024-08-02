use actix_web::dev::Response;
use actix_web::http::header::ContentType;
use actix_web::middleware::Logger;
use actix_web::{
    error, get, post,
    web::{self, Json, ServiceConfig},
    Result,
    Responder,
};


use awc::http::StatusCode;
use shuttle_actix_web::ShuttleActixWeb;
use shuttle_runtime::{CustomError};
use sqlx::{PgPool};
use actix_web::{HttpRequest, HttpResponse};
use serde_json::Value;

use brummer_resume_backend::user;
use brummer_resume_backend::post;
use brummer_resume_backend::comment;


use actix_cors::Cors;
use reqwest::{header, Client, RequestBuilder};
use qstring::QString;
use mime;

#[derive(Clone)]
struct AppState {
    client: reqwest::Client,
    pool: PgPool,
    spotify_token_endpoint: &'static str,
    now_playing_endpoint: &'static str,
    redirect_url: &'static str,
}

async fn get_request(data: web::Data<AppState>) -> HttpResponse {
    println!("get request");
    let client = &data.client;
    let res = async {
        client
            .get("https://api.github.com/users/jbrummer402/repos")
            .header("User-Agent", "request")
            .send()
            .await?
            .error_for_status()?
            .json::<Value>()
            .await
    }.await;
    println!("{:?}", res);

    match res {
        Ok(v) => HttpResponse::Ok().content_type("application/json").body(v.to_string()),
        Err(e) => HttpResponse::InternalServerError().body(e.to_string()),
    }
}


// #[post("/posts/{id}/submit_comment")]
// async fn add_comment_to_post(id: web::Path<String>, state: web::Data<AppState>) -> Result<StatusCode>{
//     // let comment_res = sqlx::query_as(
//     //                     "SELECT * FROM posts WHERE id=uuid($1)"
//     //                 ).bind(&id.into_inner())
//     //                 .fetch_all(&state.pool)
//     //                 .await
//     //                 .map_err(|e| error::ErrorBadRequest(e.to_string()))?;
//     //
//     Ok(StatusCode::OK)
// }

#[get("/posts/{id}/comments")]
async fn get_comments_from_post(id: web::Path<String>, state: web::Data<AppState>) -> Result<Json<Vec::<comment::Comment>>> {

    let comment_res = sqlx::query_as(
                        "SELECT comments FROM posts WHERE id=uuid($1)"
                    ).bind(&id.into_inner())
                    .fetch_all(&state.pool)
                    .await
                    .map_err(|e| error::ErrorBadRequest(e.to_string()))?;

    Ok(Json(comment_res))
}
#[get("/posts/{id}")]
async fn get_post_by_id(id: web::Path<String>, state: web::Data<AppState>) -> Result<Json<post::Post>>  {
    let query_res = sqlx::query_as(
                   "SELECT * FROM posts WHERE id=uuid($1)")
                    .bind(&id.into_inner())
                    .fetch_one(&state.pool)
                    .await
                    .map_err(|e| error::ErrorBadRequest(e.to_string()))?;
    Ok(Json(query_res))
}

#[get("/all_posts")]
async fn get_all_posts(state: web::Data<AppState>) -> Result<Json<Vec<post::Post>>> {
    println!("getting all posts");
    let query_res: Vec<post::Post> = sqlx::query_as(
        "SELECT * FROM posts"
    )
        .fetch_all(&state.pool)
        .await
        .map_err(|e| error::ErrorBadRequest(e.to_string()))?;
    
    Ok(Json(query_res))
}

#[post("/new_post")]
async fn create_new_post(path: web::Json<post::Post>, state: web::Data<AppState>) -> Result<Json<post::Post>> {

    let req_json = &path;
    let mut new_title: String = "".to_owned(); 

    if !req_json.title.is_empty() {
        let title = req_json.title.split_whitespace();

        for word in title {
            new_title.push_str(&(word[0..1].to_uppercase() + &word[1..] + " "));
        }
    }

    let query_res = sqlx::query_as(
        r#"
        INSERT INTO posts(content, tags, description, title) VALUES ($1, $2, $3,$4) RETURNING *;
    "#)
        .bind(&path.content)
        .bind(&path.tags)
        .bind(&path.description)
        .bind(new_title)
        .fetch_one(&state.pool)
        .await
        .map_err(|e| error::ErrorBadRequest(e.to_string()))?;

    Ok(Json(query_res))
}

#[post("/user")]
async fn create_new_user(path: web::Json<user::User>, state: web::Data<AppState>) -> Result<Json<user::User>> {
    let result = sqlx::query_as(

        "INSERT INTO users(first_name, last_name, email, password) VALUES($1, $2, $3, $4) RETURNING *") 
        .bind(&path.first_name)
        .bind(&path.last_name)
        .bind(&path.email)
        .bind(&path.password)
        .fetch_one(&state.pool)
        .await
        .map_err(|e| error::ErrorBadRequest(e.to_string()))?;

    Ok(Json(result))

}
#[get("/users")]
async fn get_all_users(state: web::Data<AppState>) -> Result<Json<Vec<user::User>>> {

    let result = sqlx::query_as("SELECT * from users")
        .fetch_all(&state.pool)
        .await
        .map_err(|e| error::ErrorBadRequest(e.to_string()))?;

    Ok(Json(result))

}

// #[get("/spotify")]
// async fn authorize(state: web::Data<AppState>, req: HttpRequest) -> Result<impl ResponseBuilder, actix_web::Error> {

//     let query_string = req:: 

//     let mut res: Response<_> = Response::build(StatusCode::OK)
//     .content_type(mime::APPLICATION_JSON)
//     .insert_header(header)
//     .body("body");


//     Ok(res)
// }

#[shuttle_runtime::main]
async fn main(
    #[shuttle_shared_db::Postgres
    ] pool: sqlx::PgPool,
) -> ShuttleActixWeb<impl FnOnce(&mut ServiceConfig) + Send + Clone + 'static> {
    sqlx::migrate!()
        .run(&pool)
        .await
        .map_err(CustomError::new)?;


    let state = web::Data::new(AppState { pool: pool, 
        client: reqwest::Client::new(),
        spotify_token_endpoint: "https://accounts.spotify.com/api/token?grant_type=client_credentials",
        now_playing_endpoint: "https://api.spotify.com/v1/me/player/currently-playing",
    redirect_url: "https://www.jackbrummer.com"});

    let config = move |cfg: &mut ServiceConfig| {
        // set up your service here, e.g.:
    let cors = Cors::default()
        .allow_any_origin()
        .allow_any_method()
    .allow_any_header();
        cfg.service(web::scope("/app")
            .wrap(Logger::default())
            .wrap(cors)
            .service(create_new_user)
            .service(get_all_users)
            .service(create_new_post)
            .service(get_all_posts)
            .service(get_post_by_id)
            // .service(authorize)
            .app_data(state)
            .route("/repos", web::get().to(get_request)),
        );
    };
    Ok(config.into())
}
