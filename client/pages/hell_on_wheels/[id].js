import axios from "axios";
import Image from "next/image";

const config = {
  headers: { Authorization: `Bearer ${process.env.STRAPI_API_KEY}` },
};

async function getPosts(id) {
  const { data } = await axios.get(
    `https://resume-site-brummer.herokuapp.com/api/posts/5`,
    config
  );

  return data;
}

export default function Post({ data }) {
  return <h1>{data.attributes.Title}</h1>;
}

export async function getServerSideProps({ context }) {
  console.log("getting server side");
  const { data } = await getPosts();

  console.log(data);
  if (!data) {
    console.log("okay");
  }
  return {
    props: { data },
  };
}
