import axios from "axios";

export async function getPosts() {
  try {
    const { data } = await axios.get(
`http://${process.env.LOCAL_URL}/all_posts`);

    return data;
  } catch (error) {
    let data = {}
    console.log(error);  
  }
}

export async function getPostId(id) {
  const { data } = await axios.get(
    `http://${process.env.LOCAL_URL}/posts/${id}`,
  );
  return data;
}
