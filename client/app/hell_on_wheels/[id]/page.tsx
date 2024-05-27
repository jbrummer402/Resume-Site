import React from "react";

import { getPosts, getPostId } from "../../../lib/api/data";
import { Container, Heading, Text, HStack, Tag } from "@chakra-ui/react";
import { HeadersAdapter } from "next/dist/server/web/spec-extension/adapters/headers";
interface BlogPostProps {
  // Add any necessary props for your blog post here
}

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
export default async function BlogPostPage({
  params,
}: {
  params: { id: string };
}) {
  const post = await getPostId(params.id);
  return (
    <Container mt={"10rem"}>
      <Heading>{post.title}</Heading>
      <BlogTags tags={post.tags} />
      <Text>{post.content}</Text>
    </Container>
  );
}
