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
  console.log(`the url is ${process.env.LOCAL_URL}`);
  try {
    let data = await fetch(`http://${process.env.LOCAL_URL}/all_posts`, {
      cache: "no-store",
    });

    return data.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getPostId(id) {
  try {
    let data = await fetch(`http://${process.env.LOCAL_URL}/posts/${id}`, {
      cache: "no-store",
    });

    console.log(data);
    return data.json();
  } catch (error) {
    console.log(error);
  }
}
