import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
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

import axios from "axios";

import { useState, useEffect } from "react";
import { isEmpty } from "lodash";

const config = {
  headers: { Authorization: `Bearer ${process.env.STRAPI_API_KEY}` },
};

const BlogTags = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

async function getPosts() {
  const { data } = await axios.get(
    "https://resume-site-brummer.herokuapp.com/api/posts",
    config
  );

  return data;
}

export const BlogAuthor = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="/images/IMG_4380.png"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date ? props.date.toLocaleDateString() : ""}</Text>
    </HStack>
  );
};

export default function ArticleList(props) {
  let [posts, setPosts] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    if (props.data) {
      setPosts(props.data);
      setLoading(false);
    }
  });

  return (
    <Container maxW={"7xl"} p="12">
      <Heading align="center" fontSize={"5xl"} as="h1">
        Hell on Wheels
      </Heading>
      {isEmpty(posts) ? (
        <Heading align="left" as="h2" marginTop="5">
          {loading ? "Loading..." : "No posts yet"}
        </Heading>
      ) : (
        <>
          <Heading>{loading ? "Loading..." : "All Posts"}</Heading>
          {posts.map((post) => {
            return (
              <>
                <Heading fontSize="xl" marginTop="2">
                  <Link
                    textDecoration="none"
                    _hover={{ textDecoration: "none" }}
                    href={`/hell_on_wheels/${post.id}`}
                  >
                    {post.attributes.Title}
                  </Link>
                </Heading>

                <BlogTags
                  tags={post.attributes.data.categories}
                  marginTop="2"
                />
                {post.attributes.description ? (
                  <Text as="p" fontSize="md" marginTop="2">
                    {post.attributes.description}
                  </Text>
                ) : (
                  <Text as="p" fontSize="md" marginTop="3"></Text>
                )}

                <BlogAuthor
                  name="Jack Brummer"
                  date={
                    post.attributes.PostDate
                      ? new Date(post.attributes.PostDate)
                      : ""
                  }
                />
              </>
            );
          })}
        </>
      )}

      <Divider marginTop="5" />

      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Heading as="h2">What I write about</Heading>
        <Text as="p" fontSize={"md"}>
          Welcome to my blog, where I share my thoughts and opinions on various
          topics that intrigue me. As an avid media consumer, I enjoy exploring
          and analyzing the latest movies, TV shows, and other forms of
          entertainment. However, I am also deeply passionate about social
          justice, particularly in regards to disability rights. Through my
          writing, I hope to shed light on important issues and encourage
          conversations around these topics. Additionally, as someone who is
          fascinated by technology and its impact on society, I enjoy exploring
          and sharing my insights on the latest advancements and trends.
          Ultimately, this blog is a space for me to express my perspectives and
          share my interests with others who may share similar passions.
        </Text>
      </VStack>
    </Container>
  );
}

export async function getStaticProps() {
  const { data } = await getPosts();
  console.log(data);
  return {
    props: { data },
    revalidate: 86400,
  };
}
