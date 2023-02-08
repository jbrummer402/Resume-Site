import Head from "next/head";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import styles from "../components/layout.module.css";

import { Container, Stack, VStack, Heading, UnorderedList, 
  ListItem, Text, Image, HStack, Flex } from "@chakra-ui/react";


export default function Interests() {
  return (
    <>
      <Container maxW={'100%'}>
          <Stack direction={{base : 'column', lg : 'row'}} fontSize={'xl'}>
            <HStack >
              
              <VStack maxW={'90vw'} marginLeft={'4em'} align='left'>
                <Heading lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }} as={'span'}
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
                    }} > Interests and Hobbies </Heading>
                    
                    <UnorderedList paddingLeft={'2em'}>
                      {/* <ListItem>Music</ListItem>
                      <ListItem>Movies</ListItem>
                      <ListItem>Programming</ListItem>
                      <ListItem>Building Computers</ListItem>
                      <ListItem>Going for walks</ListItem> */}
                    </UnorderedList>
                  
              </VStack>
              </HStack>
          </Stack>
        </Container>
    </>
  );
}
