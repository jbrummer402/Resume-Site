use actix_web::middleware::Logger;
use actix_web::{
    error, get, post,
    web::{self, Json, ServiceConfig},
    Result,
};
use actix_web::{http::header::ContentType, HttpResponse};
use serde::{Deserialize, Serialize};
use shuttle_actix_web::ShuttleActixWeb;
use shuttle_runtime::{CustomError};
use sqlx::{Executor, FromRow, PgPool};
use sqlx::*;
use brummer_resume_backend::user;
use brummer_resume_backend::post;

#[derive(Clone)]
struct AppState {
    pool: PgPool,
}

#[post("/new_post")]
async fn create_new_post(path: web::Json<post::Post>, state: web::Data<AppState>) -> Result<Json<post::Post>> {

    let query_res = sqlx::query_as(
    "
    INSERT INTO posts (content, tags, title) VALUES($1, $2, $3) RETURNING *
    ")
        .bind(&path.content)
        .bind(&path.tags)
        .bind(&path.title)
        .fetch_one(&state.pool)
        .await
        .map_err(|e| error::ErrorBadRequest(e.to_string()))?;

    Ok(Json(query_res))
}

#[post("/user")]
async fn create_new_user(path: web::Json<user::User>, state: web::Data<AppState>) -> Result<Json<user::User>> {
    let result = sqlx::query_as(

    "INSERT INTO users (first_name, email, last_name, password) VALUES($1, $2, $3, $4) RETURNING *") 
                    .bind(&path.first_name)
                    .bind(&path.email)
                    .bind(&path.last_name)
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

#[get("/hello")]
async fn hello_world() -> &'static str {
    "Hello World!"
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
                .app_data(state),
        );
    };
    Ok(config.into())
}
