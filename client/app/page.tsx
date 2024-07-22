
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

import { HamburgerIcon, ArrowUpIcon, ChevronDownIcon } from "@chakra-ui/icons";

import { motion, useScroll } from 'framer-motion';

import SectionContainer from '../components/containers/SectionContainer';
import Scroller from '../components/Nav_Components/Scroller';

import { useRef, useEffect } from "react";
import { cookies } from 'next/headers';

const siteTitle = "Jack Brummer.com";
const full_name = "Jack Brummer"

import { about_me, education, interests_and_hobbies } from '../components/sections_data/sections';

const sections = [about_me, education, interests_and_hobbies];

async function getCookieData() {
  const cookieData = cookies().getAll()
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(cookieData)
    }, 1000)
  )
}

export default async function Index(props) {
  const cookieData = await getCookieData();
  return (
    <>
      <Scroller section="#about-me"/>
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

          <Stack maxW={"100%"} mt={"25rem"} spacing={5}>
            {sections.map((item) => {
              return (<SectionContainer key={item.title} {...item} />)
            })}
          </Stack>
        </Stack>
      </Container>
    </>
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
