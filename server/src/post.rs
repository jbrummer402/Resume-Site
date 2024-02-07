use sqlx::Type;
use sqlx::{Executor, FromRow, PgPool};
use serde::{Deserialize, Serialize};

#[derive(Type)]
#[derive(Serialize, Deserialize, FromRow)]
pub struct Post {
    content: String,
    tags: Vec<String>,
    title: String,
}


impl Post {
    pub fn new(
        content: String,
        tags: Vec<String>,
        title: String,
    ) -> Post {
        Post {
            content: content,
            tags: tags,
            title: title,
        }
    }

}
