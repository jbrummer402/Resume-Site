import Head from "next/head";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import styles from "../components/layout.module.css";

import { Container, Stack, VStack, Heading, UnorderedList, 
  ListItem, Text, Image, HStack, Flex } from "@chakra-ui/react";


export default function Research() {
  return (
      <>
        <Container maxW={'100%'}>
          <Stack direction={{base : 'column', lg : 'row'}} fontSize={'xl'}>
            <HStack >
              
              <VStack align='left'>
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
                    }} >Research </Heading>
                <Heading fontSize={'2xl'}>Here are some of the Research I've conducted during my time at Stevens</Heading>
                  
                  
  
                  <Text marginLeft={"1rem"} color={'gray.550'} >
                    During the summer of 2020 I assisted with Professor Samantha Kleinberg.
                    She was conducting a survery in which people rated their emotional response
                    to different means of protecting themselves from COVID-19.

                    I was in charge of looking through all the responses and cateogrizing them 
                    based on their content.
                  </Text>
                  <Text>
                    For example, if you had one survey response that was 'wear ppe' then that response
                    would be put into the social distance category. As time went on the categories got more 
                    and more specific.
                  </Text>
                  <Text>
                    Apart from that, I have a significantly vested interest in artificial intelligence and machine learning.
                    I have taken every AI course that was offered at Stevens and have learned more than 
                    I ever imagined.
                  </Text>
              </VStack>
              </HStack>
          </Stack>
        </Container>
  
  
      </>
        );
}
