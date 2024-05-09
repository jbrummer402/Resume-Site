'use client';

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../components/layout.module.css";
import utilStyles from "../styles/utils.module.css";

import { Heading, IconButton } from "@chakra-ui/react";
import { Stack, HStack, VStack, Container, Text } from "@chakra-ui/react";
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

import { HamburgerIcon, ArrowUpIcon } from "@chakra-ui/icons";



import ScrollMenu from "../components/scrollMenu";
import { MenuItems } from "../components/scrollMenu";

import { useRef, useEffect } from "react";

const siteTitle = "Jack Brummer.com";

const menuItems: MenuItems = {
  menuList: ["About me", "Education", "Interests"],
};

export default function Index(props) {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
        <ScrollMenu menuList={menuItems} />
        <Container maxW={"90%"}> 
          <Stack
            ml={"1rem"}
            spacing={{ base: 8, md: 10 }}
            direction={{ base: "row", md: "column" }}
            backgroundImage={"/background.svg"}
            backgroundRepeat={"no-repeat"}
            backgroundPosition={"right"}
            backgroundSize={"70%"}
          maxH={"100vh"}
            style={{ backgroundPositionY: "2em" }}
          >
            <Stack my={{ base: "10rem" }}>
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
                  React and Next.js for the front end.                </Text>
                {/* <Image style={{ zIndex: -1 }} src="/background.svg"></Image> */}
              </HStack>

            </Stack>
          </Stack>
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
