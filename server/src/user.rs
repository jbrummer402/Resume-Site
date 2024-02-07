use serde::{Serialize, Deserialize};
use sqlx::{Executor, FromRow, PgPool};

#[derive(Serialize, Deserialize, FromRow)]
pub struct User {
first_name: String,
}

