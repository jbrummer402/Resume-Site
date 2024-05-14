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

import { getPosts } from "../../../lib/api/data";
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

async function getBlogData({ slug }: { slug: string }) {
  const posts = await getPosts();
  const post = posts.find((post) => post.id === slug);
  return post;
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

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const post = await getBlogData({ slug: params.id });
  return (
    <VStack spacing={4} align="start">
      <Heading as="h1">{post.title}</Heading>
      {/* <Image src={params.imageUrl} alt={params.title} />
      <Text>{params.content}</Text>
      <BlogTags tags={params.tags} marginTop={6} /> */}
    </VStack>
  );
}
