use serde::{Serialize, Deserialize};
use sqlx::{Executor, FromRow, PgPool};
use sqlx::Type;

#[derive(sqlx::Type)]
#[derive(Serialize, Deserialize, FromRow)]
pub struct User {
    pub first_name: String,
    pub last_name: String,
    pub email: String,
    pub password: String,
}

