import React from "react";

import { getPosts, getPostId } from "../../../lib/api/data";
import { Container, Heading, Text, Center } from "@chakra-ui/react";
import BlogTags from "../../../components/BlogComponents/BlogTags";
interface BlogPostProps {
  // Add any necessary props for your blog post here
}


export default async function BlogPostPage({
  params,
}: {
  params: { id: string };
}) {
  const post = await getPostId(params.id);
  return (
    <Container centerContent>
      <Heading>{post.title ? post.title : ""}</Heading>
      <BlogTags tags={post.tags} />
      
      <Text mt={"3rem"}>
        {post.content ? post.content : ""}
      </Text>
    </Container>
  );
}
