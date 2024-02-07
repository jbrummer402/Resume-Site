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
use shuttle_aws_rds::Postgres;

#[derive(Clone)]
struct AppState {
    pool: PgPool,
}

// #[post("/new_post")]
// async fn create_new_post() -> Result<Json<post::Post>> {
//    let result = sqlx::query_as("INSERT INTO posts(content)") 
//
//     Ok(Json(result)) 
// }

#[post("/user")]
async fn create_new_user(state: web::Data<AppState>) -> Result<Json<user::User>> {
    
    let result = sqlx::query_as(

    "INSERT INTO users(first_name) VALUES('bob') RETURNING first_name") 
                    .fetch_one(&state.pool)
                    .await
                    .map_err(|e| error::ErrorBadRequest(e.to_string()))?;

    Ok(Json(result))

}
#[get("/users")]
async fn get_all_users(path: web::Path<i32>, state: web::Data<AppState>) -> Result<Json<user::User>> {
    
    let result = sqlx::query_as("SELECT * from users")             
                    .bind(*path)
                    .fetch_one(&state.pool)
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
                .service(hello_world)
                .app_data(state),
        );
    };
    Ok(config.into())
}
