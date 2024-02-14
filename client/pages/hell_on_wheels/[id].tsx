import axios from "axios";
import Image from "next/image";

import React from "react";
import {
  Box,
  Heading,
  Link,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
} from "@chakra-ui/react";

async function getPosts(id) {
  const { data } = await axios.get(
    `http://${process.env.LOCAL_URL}/${params.id}`,
  );

  return data;
}

export const getStaticPaths = (async () => {
  const res = await getPosts();
  const posts = await res.json();

  const paths = posts.map((post) => {
    params: { id: post.id }
  }));

  return {
    paths, 
    fallback: false,
    
  }

}) satisfies GetStaticPaths

export const getStaticProps = (async () =>  {
  try {
    const data = await getPosts();
    console.log(data);
    if (data) {
      return {
        props: { data },
        revalidate: 86400,
      }
    } 
    else {
      return {
        props: { data: [] },
        revalidate: 86400,
      }
    }

  } catch (error) {
    return {
      props: { data },
    }
  }
});


export default function Post({ data, pageProps, children }) {
  return (
    <Container maxW={"7xl"} p="12">
      <Heading align="center" fontSize={"5xl"} as="h1">
        Hell on Wheels
      </Heading>
      <Heading as="h2" fontSize="3xl" marginTop="2">
        {data.attributes.Title}
      </Heading>

      <Text fontSize="md" marginTop="1">
        {new Date(data.attributes.PostDate).toLocaleDateString()}
      </Text>

      <Text as="p" fontSize="lg" marginTop="3">
        {data.attributes.PostContent}
      </Text>
    </Container>
  );
}

// export async function getServerSideProps(context) {
//   console.log("getting server side");
//
//   const { data } = await getPosts(context.params.id);
//   console.log(data);
//   return {
//     props: { data },
//   };
// }
