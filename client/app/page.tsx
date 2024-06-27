'use client';

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../components/layout.module.css";
import utilStyles from "../styles/utils.module.css";

import { Heading } from "@chakra-ui/react";
import { Stack, HStack, VStack, Box, Container, Text, Flex, IconButton } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";

import AboutMe from "../components/AboutMe";
import Interests from "../components/Interests";
import Education from "../components/Education";

import { HamburgerIcon, ArrowUpIcon, ChevronDownIcon } from "@chakra-ui/icons";

import { motion } from 'framer-motion';

import ScrollMenu from "../components/scrollMenu";

import { useRef, useEffect } from "react";

const siteTitle = "Jack Brummer.com";

const menuItems: MenuItems = {
  menuList: ["About me", "Education", "Interests"],
};

export default function Index(props) {
  return (
    <Container maxW={"100%"}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Stack
        maxW={"80%"}
      > 
        <VStack
          align={"start"}
          backgroundImage={"/background.svg"}
          backgroundRepeat={"no-repeat"}
          backgroundPosition={"right"}
          backgroundSize={["60%", "70%"]}
            mt={"10rem"}
        >
          <Stack
              h={"70vh"}
              ml={"5rem"}
          >
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={["5xl", "6xl"]}
            >

              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: "30%",
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "gray.500",
                  zIndex: -1,
                }}
              >
                Welcome to
              </Text>
              <Text />
              <Text as={"span"} color={"gray.500"}>
                my website!
              </Text>
            </Heading>
            <HStack>
              <Text
                color={"gray.550"}
                fontSize={"2xl"}
                maxW={"50%"}
                textShadow={"-1px 0px gray"}
              >
                Here you'll find some of my favorite projects that I have worked
                on over the years. I made this site completely on my own using
                React and Next.js for the front end.                
              </Text>
            </HStack>

          </Stack>
        </VStack>
        <Box position={"fixed"} boxSize={"2em"}>
          <IconButton  
            icon={<ChevronDownIcon boxSize={"3em"}/>}
          />
        </Box> 
        <Stack maxW={"100%"} marginTop={"20rem"}>
          <AboutMe id="about-me" maxW="inherit" />
          <Education paddingLeft={"19em"} />
          <Interests />
        </Stack>

        {/* {isVisible && (
          <Box
            onClick={scrollToTop}
            position="fixed"
            bottom="20px"
            right={["16px", "84px"]}
            zIndex={3}
          >
            <Button
              size={"sm"}
              rightIcon={<ArrowUpIcon />}
              colorScheme="whatsapp"
              variant="solid"
            >
              Scroll To Top
            </Button>
          </Box>
        )} */}
      </Stack>
    </Container>
  );
}

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }
