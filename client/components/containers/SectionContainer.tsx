'use client';
import { Container, Heading, Text, Stack, VStack, UnorderedList, ListItem, Image } from "@chakra-ui/react";
import { useRef, useEffect } from "react";
import { motion, useScroll, useInView, useAnimation } from 'framer-motion';
import container_styles from '../../styles/component_styles/container_styles.module.css';

import { ContainerItemProps } from '../../types/types';

export default function SectionContainer({...props}: ContainerItemProps ) {

  const ref = useRef(null);
  const isInView = useInView(ref);

  console.log(props);
  return (
    <div 
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      id={props.id}
      ref={ref}>
    <Container
      maxW={"90%"}
        mt={"10rem"}
        mb={"10rem"}
      backgroundImage={props.background_image_path ? props.background_image_path.toString() : ""}
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

          <Text
            fontSize={"xl"}
            color={"gray.550"}
            fontWeight={"630"}
          >
          </Text>
          <Text
            fontSize={"xl"}
            id={"#foo"}
            color={"gray.550"}
            fontWeight={"630"}
          >
          {props.description}
          </Text>
            <UnorderedList spacing={1} paddingLeft={"3em"}>
              {props.listItems && props.listItems.length > 0 ? 
                  props.listItems.map((item) => {
                   return <ListItem>{item}</ListItem> 
                  })
                : ""}
            </UnorderedList>
        </VStack>

          {props.image_path && props.image_path.length > 0 ?
            (<Image
              padding={"5rem"}
              maxW={["50%", "40%"]}
              src="/images/Jack_Brummer (1).jpg"
              style={{ aspectRatio: "9/12" }}
            />) : ""

          }
      </Stack>
    </Container>
    </div>
  )
}
