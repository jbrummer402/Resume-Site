
#[derive(Serialize, Deserialize, FromRow)]
pub struct Post {

    content: String,
    user: String,
}
