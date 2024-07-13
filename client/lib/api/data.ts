import axios from "axios";

export async function getRepos() {
  try {
    const { data } = await axios.get(`https://${process.env.DB_URL}/repos`);

    return data;
  } catch (e) {
    console.log(e);
  }
}

export async function getRepoId(id) {
  try {
    const { data } = await axios.get(
      `https://${process.env.DB_URL}/repos/${id}`
    );

    return data;
  } catch (e) {
    console.log(e);
  }
}

export async function getPosts() {
  console.log(`the url is ${process.env.DB_URL}`);
  try {
    let data = await fetch(`http://${process.env.DB_URL}/all_posts`);

    return data.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getPostId(id) {
  try {
    let data = await fetch(`http://${process.env.DB_URL}/posts/${id}`
    );

    console.log(data);
    return data.json();
  } catch (error) {
    console.log(error);
  }
}
