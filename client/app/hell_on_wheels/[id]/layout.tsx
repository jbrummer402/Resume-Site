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
    <section>
      {children}
    </section>
  );
}
