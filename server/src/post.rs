use sqlx::Type;
use sqlx::{Executor, FromRow, PgPool};
use serde::{Deserialize, Serialize};

#[derive(sqlx::Type)]
#[derive(Serialize, Deserialize, FromRow)]
pub struct Post {
    pub content: String,
    pub tags: Vec<String>,
    pub description: String,
    pub title: String,
}
