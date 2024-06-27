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
  Center,
  Card,
  CardHeader,
  CardBody
} from "@chakra-ui/react";

import BlogTags from "../BlogComponents/BlogTags";
import BlogAuthor from "../containers/BlogAuthor";

import { Post } from "../../types/post"

interface PostProps {
  post: Post 
}

export default function BlogContainerBox({ post } : PostProps) {
  return (
    <Card maxW={"sm"}>
      <CardHeader>
        <Heading fontSize="xl" >
          <Link
            textDecoration="none"
            _hover={{ textDecoration: "none" }}
            href={`/hell_on_wheels/${post.id}`}
          >
            {post.title}
          </Link>
        </Heading>

      </CardHeader>

      <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
        <BlogTags tags={post.tags} marginTop="2" />
        <BlogAuthor
          name="Jack Brummer"
          date={post.date ? new Date(post.date) : ""}
        />
      </CardBody>
    </Card>
  );

}
