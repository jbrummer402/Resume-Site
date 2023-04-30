import Head from "next/head";
import Link from "next/link";
import { Image, ListIcon, ListItem, Stack, UnorderedList, VStack } from "@chakra-ui/react";
import utilStyles from "../styles/utils.module.css";
import styles from "../components/layout.module.css";

import { Container, Heading, Text } from "@chakra-ui/react";

import { useEffect } from 'react'

export default function AboutMe(props) {
  

    
  
  return (
    <Container paddingLeft={"6em"} paddingTop={"2em"} maxW={'100%'} id={props.id}>
      <Stack direction={{base : 'column', lg : 'row'}}   fontSize={'xl'}>
        <VStack align={'flex-start'} >
          <Heading lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '3xl', lg: '5xl' }} as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'gray.500',
                zIndex: -1,
              }} >About Me </Heading>
          <Heading  fontSize={'2xl'}>Hi there! My name is Jack Brummer</Heading>

            <Text fontSize={'xl'} id={"#foo"} color={'gray.550'} maxW={{base : '40vw', md : '45vw', lg: "50vw"}}>
              I am heavily interested in nearly all things computer science. I
              began programming in my early teens and fell in love with the
              problem solving that comes with it, and all the things you are
              able to do and create.
            </Text>
            <Text>
              I have experience in various different languages and practices,
              including:
            </Text>
            <UnorderedList spacing={1} paddingLeft={'3em'}>
              <ListItem>Java</ListItem>
              <ListItem>C++</ListItem>
              <ListItem>JavaScript</ListItem>
              <ListItem>React</ListItem>
              <ListItem>Relational Databases</ListItem>
              <ListItem>Functional Programming</ListItem>
            </UnorderedList>
            
        </VStack>
        
        <Image
            
            paddingLeft={"3em"}
            maxW={{base : "10vw", md : "20vw", lg: "30vw"}}
            style={{maxHeight : "auto"}}
            quality={100}
            src="/images/Jack_Brummer (1).jpg" />
      </Stack>
    </Container>
      
  );
}
