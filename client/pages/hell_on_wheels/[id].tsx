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

const config = {
  headers: { Authorization: `Bearer ${process.env.STRAPI_API_KEY}` },
};

async function getPosts(id) {
  const { data } = await axios.get(
    `https://resume-site-brummer.herokuapp.com/api/posts/${id}`,
    config
  );

  return data;
}

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

export async function getServerSideProps(context) {
  console.log("getting server side");

  const { data } = await getPosts(context.params.id);
  console.log(data);
  return {
    props: { data },
  };
}
