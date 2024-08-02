import axios from "axios";
const querystring = require("node:querystring");

const SPOTIFY_TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token?grant_type=client_credentials`;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

async function authorize() {
  try {
    let { data } = await axios.get(
      "https://accounts.spotify.com/authorize?" +
        querystring.stringify({
          response_type: "code",
          client_id: process.env.SPOTIFY_CLIENT_ID,
          redirect_uri: "https://www.jackbrummer.com",
        })
    );
    console.log(" data is ");
    console.log(data);
  } catch (e) {}
}

async function getToken() {
  await authorize();
  try {
    let basic = Buffer.from(
      process.env.SPOTIFY_CLIENT_ID + ":" + process.env.SPOTIFY_SECRET
    ).toString("base64");

    let authOptions = {
      method: "post",
      url: SPOTIFY_TOKEN_ENDPOINT,
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + basic,
      },
      form: {
        grant_type: "client_credentials",
      },
      json: true,
    };
    let { data } = await axios(authOptions);

    return data.access_token;
  } catch (error) {}
}

export async function getCurrentlyPlaying() {
  try {
    const token = await getToken();

    const { data } = await axios.get(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(data);
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
