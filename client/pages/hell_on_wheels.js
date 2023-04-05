import React from 'react';
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
} from '@chakra-ui/react';

import { axios } from 'axios'

import { useState, useEffect } from 'react';
import { isEmpty } from 'lodash';

const blogURL = 'jackbrummer.com/wp-json/wp/v2/posts'

async function loading() {
  let [loading, setLoading] = useEffect(true);

}

const BlogTags = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

async function getPosts() {

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
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

function ArticleList(props) {

  let [posts, setPosts] = useState([])

  useEffect(() => {
    let posts = getPosts()
  })

  if (loading) {
    <Container maxW={'7xl'} p="12">
        <Heading align='center' fontSize={'5xl'} as="h1">Loading</Heading>
        
        <Heading align='left' as='h2' marginTop='5'>End of posts</Heading>
        
      </Container>
  }

  if (isEmpty(posts)) {
    return (
      <Container maxW={'7xl'} p="12">
        <Heading align='center' fontSize={'5xl'} as="h1">Hell on Wheels</Heading>
        
        <Heading align='left' as='h2' marginTop='5'>Nothing yet!</Heading>
        <Text align='left' fontSize='2xl'>Enter the mailing list to stay up to date</Text> 
        
        <Divider marginTop="5" />
        
        <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
          <Heading as="h2">What I write about</Heading>        
        </VStack>
      </Container>
    );
  }
  
};

export default ArticleList;