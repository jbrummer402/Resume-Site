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
                    }} > Interests and Hobbies </Heading>
                    
                    <UnorderedList paddingLeft={'2em'}>
                      <ListItem>Music</ListItem>
                      <ListItem>Movies</ListItem>
                      <ListItem>Programming</ListItem>
                      <ListItem>Building Computers</ListItem>
                      <ListItem>Going for walks</ListItem>
                    </UnorderedList>
                  
              </VStack>
              </HStack>
          </Stack>
        </Container>
    </>
    // <div
    //   style={{
    //     marginTop: "20%",
    //     display: "flex",
    //     flexDirection: "row",
    //   }}
    // >
    //   <section
    //     id={"InterestSection"}
    //     className={styles.container}
    //     style={{
    //       display: "flex",
    //       flexDirection: "row",
    //       width: "100vw",
    //       height: "auto",
    //     }}
    //   >
    //           <div className={styles.container} style={{ maxWidth: "50%", marginTop: "8vh" }}>
    //       <h1
    //         style={{ fontWeight: "bold", fontSize: "3.5rem" }}
    //         className={utilStyles.headingLg}
    //       >
    //         Interests and Projects
    //       </h1>

    //       <article style={{ fontSize: "2.2rem", lineHeight: "1.6"}}>
            
    //           {/* Throughout my years at school and in my personal life I've become
    //           interested in several different areas, inside and out of computer
    //           science.
    //         </p>
            
    //           I began programming in Java and become heavily interested in the
    //           object oriented programming paradigm. This then led me to try out
    //           other object oriented languages like C++ and Python. When I
    //           started at Stevens, I began to have more assignments that relied
    //           on a more functional programming way of execution. The class where
    //           this was most critical ended up being one of my favorite classes
    //           I've taken: Programming languages.
    //         </p>
    //         <p style={{ fontSize: "1.5rem", lineHeight: "1.6" }}></p> */}
    //       </article>
    //     </div>
    //   </section>
    // </div>
  );
}
