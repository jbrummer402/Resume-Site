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
    <AnimatePresence>
      <StartingAnimation isVisible={true} />
      <Container maxW={"100%"}>
        <Stack maxW={"100%"} mt={"25rem"} id={"#index"} spacing={5}>
          {sections.map((item) => {
            return <SectionContainer key={item.title} {...item} />;
          })}
        </Stack>
      </Container>
    </AnimatePresence>
  );
}
