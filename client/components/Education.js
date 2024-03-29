import Head from "next/head";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import styles from "../components/layout.module.css";

import {
  Container,
  Stack,
  VStack,
  Heading,
  UnorderedList,
  ListItem,
  Text,
  Image,
  HStack,
  Flex,
} from "@chakra-ui/react";

export default function Education(props) {
  let photo = "../public/images/logos/download.jepg";
  return (
    <>
      <Container
        px={{ base: "1em", sm: "5em" }}
        paddingTop={"2em"}
        maxW={"100%"}
        id={props.id}
      >
        <Stack
          direction={{ base: "column", lg: "row" }}
          fontSize={"xl"}
          backgroundImage={"/background_3.svg"}
          backgroundRepeat={"no-repeat"}
          backgroundPosition={"right"}
        >
          <HStack>
            {/* <Image
                  
                  maxW={{base : "40vw", md : "100vw", lg: "300vw"}}
                  quality={100}
                  src="/images/logos/download.jpeg" /> */}

            <VStack align="left">
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
                Education{" "}
              </Heading>
              <Heading fontSize={"2xl"}>
                Here are the schools I went to and the things I've learned along
                the way
              </Heading>

              <UnorderedList spacing={1} paddingLeft={"3em"}>
                <ListItem>Milton Avenue School</ListItem>
                <ListItem>Chatham Middle School</ListItem>
                <ListItem>Chatham High School</ListItem>
                <ListItem>Stevens Insitute of Technology</ListItem>
              </UnorderedList>

              <Text
                marginLeft={"1rem"}
                color={"gray.550"}
                maxW={{ sm: "10em", md: "20em", lg: "30em" }}
              >
                I began programming in Java and become heavily interested in the
                object oriented programming paradigm. This then led me to try
                out other object oriented languages like C++ and Python. When I
                started at Stevens, I began to have more assignments that relied
                on a more functional programming way of execution. The class
                where this was most critical ended up being one of my favorite
                classes I've taken: Programming languages.
              </Text>
            </VStack>
          </HStack>
        </Stack>
      </Container>
    </>
  );
}
