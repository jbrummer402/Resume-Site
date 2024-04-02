

use serde::{Deserialize, Serialize};


#[derive(Serialize, Deserialize)]
pub struct Repo {
    pub name: String,
    pub description: Option<String>,
    pub node_id: String,
    pub url: String
}
