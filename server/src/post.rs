use sqlx::Type;
use sqlx::{Executor, FromRow, PgPool};
use serde::{Deserialize, Serialize};
use sqlx::{types::Uuid, types::Json};

#[derive(sqlx::Type)]
#[derive(Serialize, Deserialize, FromRow)]
pub struct Post {
    pub id: Option<Uuid>,
    pub content: String,
    pub tags: Vec<String>,
    pub description: String,
    pub title: String,
}
