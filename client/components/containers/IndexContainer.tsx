"use client";
import Head from "next/head";
import { Heading, useColorMode } from "@chakra-ui/react";
import { Stack, HStack, VStack, Container, Text } from "@chakra-ui/react";
import Scroller from "../Nav_Components/Scroller";
import SectionContainer from "./SectionContainer";
import {
  AnimatePresence,
  useInView,
  useIsPresent,
  usePresence,
} from "framer-motion";
import { animate, motion } from "framer-motion";
import IndexLinkContainer from "./IndexLinkContainers";
const siteTitle = "Jack Brummer.com";
const full_name = "Jack Brummer";
import { StartingAnimation } from "../../app/layout";

import {
  index,
  about_me,
  education,
  interests_and_hobbies,
} from "../SectionsData/sections";
import TwitchBox from "../Embeds/TwitchEmbed";
import { useEffect, useState } from "react";

const sections = [index, about_me, education, interests_and_hobbies];

// const textAnimation = {
//   hidden: {
//     opacity: 0,
//     y: 20,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//   },
// };

export default function IndexContainer(props) {
  return (
    <>
      <AnimatePresence>
        <StartingAnimation isVisible={true} />
        <Container maxW={"100%"}>
          <Head>
            <title>{siteTitle}</title>
          </Head>
          <Stack>
            <VStack align={"start"}>
              <Stack ml={"5rem"} h={"70vh"}>
                <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  mt={"100vh"}
                  fontSize={["5xl", "6xl"]}
                >
                  Welcome to my website
                </Heading>
                <HStack alignItems={"start"}>
                  <VStack alignItems={"start"}>
                    <Text
                      color={"gray.550"}
                      fontSize={"2xl"}
                      maxW={"50%"}
                      textShadow={"-1px 0px gray"}
                    >
                      Here you'll find some of my favorite projects that I have
                      worked on over the years. I made this site completely on
                      my own using React and Next.js for the front end.
                    </Text>
                    <IndexLinkContainer />
                    {/* <SvgAnimate /> */}
                    {/* <SpotifyNowPlaying /> */}
                  </VStack>
                  <TwitchBox />
                </HStack>
              </Stack>
            </VStack>

            <Stack maxW={"100%"} mt={"25rem"} id={"#index"} spacing={5}>
              {sections.map((item) => {
                return (
                  <>
                    <SectionContainer key={item.title} {...item} />
                  </>
                );
              })}
            </Stack>
          </Stack>
        </Container>
      </AnimatePresence>
    </>
  );
}
