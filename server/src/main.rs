use actix_web::middleware::Logger;
use actix_web::{
    error, get, post,
    web::{self, Json, ServiceConfig},
    http::StatusCode,
    Result,
};
use actix_web::{http::header::ContentType, HttpResponse};
use serde::{Deserialize, Serialize};
use shuttle_actix_web::ShuttleActixWeb;
use shuttle_runtime::{CustomError};
use sqlx::{Executor, FromRow, PgPool};
use sqlx::{types::uuid::Uuid};
use brummer_resume_backend::user;
use brummer_resume_backend::post;
use brummer_resume_backend::comment;

#[derive(Clone)]
struct AppState {
    pool: PgPool,
}

#[post("/posts/{id}/submit_comment")]
async fn add_comment_to_post(state: web::Data<AppState>) -> Result<(Json(StatusCode))>{
    let comment_res = sqlx::query_as(
                        "SELECT * FROM posts WHERE id=uuid($1)"
                    ).bind(&id.into_inner())
                    .fetch_all(&state.pool)
                    .await
                    .map_err(|e| error::ErrorBadRequest(e.to_string()))?;

    Ok(Json(StatusCode::OK))
}

#[get("/posts/{id}/comments")]
async fn get_comments_from_post(id: web::Path<String>, state: web::Data<AppState>) -> Result<Json<comment::Comment>> {

    let comment_res = sqlx::query_as(
                        "SELECT * FROM posts WHERE id=uuid($1)"
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
    let query_res = sqlx::query_as(
        "SELECT * FROM posts"
    )
        .fetch_all(&state.pool)
        .await
        .map_err(|e| error::ErrorBadRequest(e.to_string()))?;
    Ok(Json(query_res))
}

#[post("/new_post")]
async fn create_new_post(path: web::Json<post::Post>, state: web::Data<AppState>) -> Result<Json<post::Post>> {

    print!("{:?}", &path.content);
    let query_res = sqlx::query_as(
        r#"
        INSERT INTO posts(content, tags, description, title) VALUES ($1, $2, $3,$4) RETURNING *;
    "#)
        .bind(&path.content)
        .bind(&path.tags)
        .bind(&path.description)
        .bind(&path.title)
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


#[shuttle_runtime::main]
async fn main(
    #[shuttle_shared_db::Postgres] pool: PgPool,
) -> ShuttleActixWeb<impl FnOnce(&mut ServiceConfig) + Send + Clone + 'static> {
    pool.execute(include_str!("../schema.sql"))
        .await
        .map_err(CustomError::new)?;
    let state = web::Data::new(AppState { pool });

    let config = move |cfg: &mut ServiceConfig| {
        // set up your service here, e.g.:
        cfg.service(web::scope("/app")
            .wrap(Logger::default())
            .service(create_new_user)
            .service(get_all_users)
            .service(create_new_post)
            .service(get_all_posts)
            .service(get_post_by_id)
            .service(get_comments_from_post)
            .app_data(state),
        );
    };
    Ok(config.into())
}
