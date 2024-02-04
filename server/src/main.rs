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
// #[get("/posts")]
// async fn get_all_posts() -> Vec::<Result<Json>> {
//     let postsVec = Vec<Result<Json>>;
//     
//
//
//     return postsVec;
// }

// #[post("/new_post")]
// async fn new_post::<T>(data: Json<T>) -> HttpResponse {
//
// }

#[get("/users")]
async fn get_all_users() -> HttpResponse {
    
    let query = query!(
                    "SELECT * from USERS"
                );

    HttpResponse::Ok().into()
}

#[get("/")]
async fn hello_world() -> &'static str {
    "Hello World!"
}

#[shuttle_runtime::main]
async fn actix_web(
 #[shuttle_shared_db::Postgres] pool: PgPool
) -> ShuttleActixWeb<impl FnOnce(&mut ServiceConfig) + Send + Clone + 'static> {
    pool.execute(include_str!("../schema.sql"))
        .await
        .map_err(CustomError::new)?;
    let config = move |cfg: &mut ServiceConfig| {
        cfg.service(hello_world)
        .service(get_all_users);
    };
    Ok(config.into())
}
