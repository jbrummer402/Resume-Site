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

import {getPosts, getPostId } from "../../lib/api/data"

export default function Post({ data, post, children }) {
  return (
    <Container maxW={"7xl"} p="12">
      <Heading fontSize={"5xl"} as="h1">
        Hell on Wheels
      </Heading>
      <Heading as="h2" fontSize="3xl" marginTop="2">

      {post.title}
      </Heading>

      <Text fontSize="md" marginTop="1">
        {post.content}
      </Text>

      <Text as="p" fontSize="lg" marginTop="3">
      </Text>
    </Container>
  );
}

export const getStaticPaths = (async () => {
  const posts = await getPosts();
  
  const paths = posts.map((post) => ({
    params: { id : post.id }
  }))
  
  return {
    paths,
    fallback: false
  }

}); 

export const getStaticProps = (async (
  {params, preview = false, previewData,}
) =>  {

  try {

    const data = await getPostId(params?.id);

    return {
        props: {
          post: data
        },
    }

  } catch (error) {
    return {
      props: { data : [] },
    }
  }
});
