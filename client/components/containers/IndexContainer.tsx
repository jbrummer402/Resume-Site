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
import StartingAnimation from "../AnimationComponents/StartingAnimation";

import {
  index,
  about_me,
  education,
  interests_and_hobbies,
} from "../SectionsData/sections";
import TwitchBox from "../Embeds/TwitchEmbed";
import { useEffect, useState } from "react";

const sections = [index, about_me, education, interests_and_hobbies];

export default function IndexContainer(props) {
  return (
    <AnimatePresence>
      <StartingAnimation isVisible={true} />
      <Stack spacing={"50vh"}>
        {sections.map((item) => {
          return <SectionContainer key={item.title} {...item} />;
        })}
      </Stack>
    </AnimatePresence>
  );
}
