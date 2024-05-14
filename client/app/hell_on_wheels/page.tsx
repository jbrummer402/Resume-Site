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

import { InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from "next";

import BlogAuthor from "../../components/containers/BlogAuthor";
import { getPosts } from "../../lib/api/data";

import { isEmpty } from "lodash";

import axios from "axios";

export async function generateStaticParams() {
  const res = await getPosts();
  const posts = res; // Add type annotation for 'posts'

  const paths = posts.map((post) => ({
    // Add type annotation for 'post'
    id: post.id,
    title: post.title,
    content: post.content,
    tags: post.tags,
  }));

  console.log(paths);
  return paths;
}
const BlogTags = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags?.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

async function getBlogPosts() {
  const res = await getPosts();
  return res;
}

export default async function ArticleList(props) {
  let posts = await getBlogPosts();
  console.log(posts);
  return (
    <Container maxW={"7xl"} p="12">
      <Heading fontSize={"5xl"} as="h1" mt="2rem">
        Hell on Wheels
      </Heading>
      {isEmpty(posts) ? (
        <Heading as="h2" marginTop="5">
          No posts yet
        </Heading>
      ) : (
        <>
          <HStack>
            {posts.map((post) => {
              return (
                <Container>
                  <Heading fontSize="xl" marginTop="2">
                    <Link
                      textDecoration="none"
                      _hover={{ textDecoration: "none" }}
                      href={`/hell_on_wheels/${post.id}`}
                    >
                      {post.title}
                    </Link>
                  </Heading>

                  <BlogTags tags={post.tags} marginTop="2" />
                  {post.description ? (
                    <Text as="p" fontSize="md" marginTop="2">
                      {post.description}
                    </Text>
                  ) : (
                    <Text as="p" fontSize="md" marginTop="3"></Text>
                  )}

                  <BlogAuthor
                    name="Jack Brummer"
                    date={post.date ? new Date(post.date) : ""}
                  />
                </Container>
              );
            })}
          </HStack>
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
