import React from "react";

import { getPosts, getPostId } from "../../../lib/api/data";
import { Container } from "@chakra-ui/react";
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

export default async function BlogPostPage({
  params,
}: {
  params: { id: string };
}) {
  const post = await getPostId(params.id);
  return (
    <Container mt={"10rem"}>
      <h1>test</h1>
    </Container>
  );
}
