
use sqlx::{FromRow};
use serde::{Deserialize, Serialize};
use sqlx::{types::Uuid};

#[derive(sqlx::Type)]
#[derive(Serialize, Deserialize, FromRow)]
pub struct Post {
    pub id: Option<Uuid>,
    pub content: String,
    pub tags: Vec<String>,
    pub description: String,
    pub title: String,
}
