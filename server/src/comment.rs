
use sqlx::{FromRow};
use serde::{Deserialize, Serialize};
use sqlx::{types::Uuid};


#[derive(sqlx::Type)]
#[sqlx(type_name = "comment")]
#[derive(Serialize, Deserialize, FromRow)]
pub struct Comment {
    pub content: String,
    pub userId: Uuid,
    pub likes: i64,
}
