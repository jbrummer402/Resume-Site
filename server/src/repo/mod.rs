use sqlx::Type;
use sqlx::{Executor, FromRow, PgPool};
use serde::{Deserialize, Serialize};
use sqlx::{types::Uuid, types::Json};

#[derive(Serialize, Deserialize)]
pub struct Repo {
    pub name: String,
    pub description: Option<String>,
    pub node_id: String,
    pub url: String
}
