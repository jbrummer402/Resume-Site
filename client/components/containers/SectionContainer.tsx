"use client";
import Head from "next/head";
import {
  Container,
  Heading,
  Text,
  Stack,
  VStack,
  HStack,
  UnorderedList,
  ListItem,
  Image,
  Box,
} from "@chakra-ui/react";
import { useRef, useEffect } from "react";
import { motion, useScroll, useInView, useAnimation } from "framer-motion";
import container_styles from "../../styles/component_styles/container_styles.module.css";
import IndexLinkContainer from "./IndexLinkContainers";
import TwitchBox from "../Embeds/TwitchEmbed";
import { ContainerItemProps } from "../../types/types";
import SpotifyNowPlaying from "../spotify/SpotifyNowPlaying";

const IndexSectionContainer = ({ ...props }: ContainerItemProps) => {
  return (
    <VStack align={"start"} pl={"5rem"} pt={"25rem"} {...props}>
      <Stack maxW={"90%"}>
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={["4xl", "5xl", "6xl"]}
        >
          Welcome to my website
        </Heading>
        <Stack direction={{ sm: "column", xl: "row" }}>
          <VStack align={"start"}>
            <Text
              color={"gray.550"}
              fontSize={"2xl"}
              maxW={"80vw"}
              textShadow={"-1px 0px gray"}
            >
              Here you'll find some of my favorite projects that I have worked
              on over the years. I made this site completely on my own using
              React and Next.js for the front end.
            </Text>
            <IndexLinkContainer />
            <SpotifyNowPlaying />
            {/* <SvgAnimate /> */}
          </VStack>
          <Box display={{ base: "none", md: "inline-block" }}>
            <TwitchBox />
          </Box>
        </Stack>
      </Stack>
    </VStack>
  );
};

export default function SectionContainer({ ...props }: ContainerItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return props.id === "index-container" ? (
    <IndexSectionContainer {...props} />
  ) : (
    <div
      key={props.id}
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      ref={ref}
      id={props.id}
    >
      <Container
        ml="5rem"
        position={"relative"}
        maxW={"80vw"}
        backgroundImage={
          props.background_image_path
            ? props.background_image_path.toString()
            : ""
        }
        backgroundRepeat={"no-repeat"}
        backgroundPosition={"right"}
      >
        <Stack direction={{ base: "column", lg: "row" }} fontSize={"xl"}>
          <VStack align={"left"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "3xl", lg: "5xl" }}
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
              {props.title}
            </Heading>
            <Heading fontSize={"2xl"}>{props.sublabel}</Heading>

            <Text fontSize={"xl"} color={"gray.550"} fontWeight={"630"}></Text>
            <Text fontSize={"xl"} color={"gray.550"} fontWeight={"630"}>
              {props.description}
            </Text>
            <UnorderedList spacing={1} paddingLeft={"3em"}>
              {props.listItems && props.listItems.length > 0
                ? props.listItems.map((item) => {
                    return <ListItem key={item}>{item}</ListItem>;
                  })
                : ""}
            </UnorderedList>
          </VStack>

          {props.image_path && props.image_path.length > 0 ? (
            <Image
              padding={"5rem"}
              maxW={["50%", "40%"]}
              src="/images/Jack_Brummer (1).jpg"
              style={{ aspectRatio: "9/12" }}
            />
          ) : (
            ""
          )}
        </Stack>
      </Container>
    </div>
  );
}
