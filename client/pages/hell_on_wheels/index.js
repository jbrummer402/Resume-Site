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

import axios  from 'axios'

import { useState, useEffect } from 'react';
import { isEmpty } from 'lodash';

const blogURL = 'https://resume-site-brummer.herokuapp.com/admin/content-manager/collectionType/api::post.post'


const config = {
  headers: { Authorization: `Bearer ${process.env.STRAPI_API_KEY}` }
};

async function loading() {
  let [loading, setLoading] = useEffect(true);

}

const BlogTags = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {/* {props.tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })} */}
    </HStack>
  );
};

async function getPosts() {
  const { data } = await axios.get('https://resume-site-brummer.herokuapp.com/api/posts',
                      config)

  return data
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

  let [posts, setPosts] = useState([]);
  let [loading, setLoading] = useState(true)
  useEffect(() => {
    if (props.data) {
      setPosts(props.data);
      console.log(posts)
    }

    if (isEmpty(props.data)) {
      setLoading(true)
    }

  })

  if (isEmpty(posts)) {
    return (
      <Container maxW={'7xl'} p="12">
        <Heading align='center' fontSize={'5xl'} as="h1">Hell on Wheels</Heading>
        
        <Heading align='left' as='h2' marginTop='5'>{loading ? "Loading..." : "New Postsasdc"}</Heading>
        {/* <Text align='left' fontSize='2xl'>Enter the mailing list to stay up to date</Text> 
        
        <Divider marginTop="5" />
        
        <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
          <Heading as="h2">What I write about</Heading>        
        </VStack> */}
      </Container>
    );
  } else {
    return (
      <Container maxW={'7xl'} p="12">
        <Heading align='center' fontSize={'5xl'} as="h1">Hell on Wheels</Heading>
        
        <Heading align='left' as='h2' marginTop='5'>New posts</Heading>
        <Text align='left' fontSize='2xl'>Enter the mailing list to stay up to date</Text> 
        
        { posts.map((post) => {
            return (
              <Heading as='h3' fontSize={'2xl'}>
                {post.attributes.Title}
              </Heading>
            )
          })
        }

        <Divider marginTop="5" />
        
        <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
          <Heading as="h2">What I write about</Heading>        
        </VStack>
      </Container>
    );
  }
    
  }
  

export default ArticleList;

export async function getStaticProps() {

  const { data } = await getPosts()
  
  return {
    props: { data },
    revalidate : 86400
  }

}

