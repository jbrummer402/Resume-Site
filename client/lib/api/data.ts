import axios from "axios";
const querystring = require("node:querystring");

const SPOTIFY_TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token?grant_type=client_credentials`;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

export async function getCurrentlyPlaying() {
  try {
    let { data } = await axios.get(
      `https://${process.env.DB_URL}/currently_playing`
    );

    return data;
  } catch (e) {
    console.error(e);
  }
}

export async function getRepos() {
  console.log("getting repos");
  try {
    const { data } = await axios.get(`http://${process.env.DB_URL}/repos`);
    console.log(data);
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
    let data = await fetch(`http://${process.env.DB_URL}/posts/${id}`);

    console.log(data);
    return data.json();
  } catch (error) {
    console.log(error);
  }
}
