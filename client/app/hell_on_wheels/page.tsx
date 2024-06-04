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
  Center
} from "@chakra-ui/react";

import BlogTags from "../../components/BlogComponents/BlogTags.tsx";

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

async function getBlogPosts() {
  const res = await getPosts();
  return res;
}

export default async function ArticleList(props) {
  let posts = await getBlogPosts();
  console.log(posts);
  return (
    <Container maxW={"100%"} centerContent p="12">
      <Heading fontSize={"5xl"} as="h1" mt="3rem">
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
          Hello! You have just stumbled upon my blog. In here I plan to write about various topics ranging from technology, art, philosophy, and disability advocacy.
          Think of this almost as a means for me to journal out my thoughts and share them with 
          readers like you.
          Enjoy the ride! Even I am not fully sure what will end up on here.
        </Text>
      </VStack>
    </Container>
  );
}
