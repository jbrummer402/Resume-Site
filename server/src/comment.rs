use sqlx::Type;
use sqlx::{Executor, FromRow, PgPool};
use serde::{Deserialize, Serialize};
use sqlx::{types::Uuid, types::Json};
use chrono::{DateTime, FixedOffset, Local, Utc};

#[derive(sqlx::Type)]
#[sqlx(type_name = "comment")]
#[derive(Serialize, Deserialize, FromRow)]
pub struct Comment {
    pub content: String,
    pub userId: Uuid,
    pub likes: i64,
}
