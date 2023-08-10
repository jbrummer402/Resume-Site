import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  HStack,
  IconProps,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import AboutMe from "../components/AboutMe";
import Interests from "../components/Interests";
import Education from "../components/Education";
import Research from "../components/Research";

import { HamburgerIcon, ArrowUpIcon } from "@chakra-ui/icons";

import styles from "../components/layout.module.css";
import Layout from "./layout";

import Link from "next/link";

import { useRef, useState, useEffect } from "react";

const useMountEffect = (fun) => useEffect(fun, []);

export default function LandingLayout() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const [menuStyle, setMenuStyle] = useState("burger");

  const scrollAbout = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(Object.entries(e));
    aboutRef.current.scroll({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <>
      <Menu>
        <MenuButton
          my={"10rem"}
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
        />
        <MenuList>
          <MenuItem
            onClick={(e) => {
              scrollAbout(e);
            }}
          >
            About Me
          </MenuItem>
          <MenuItem>Education</MenuItem>
          <MenuItem>Resume</MenuItem>
        </MenuList>
      </Menu>
      <Container maxW={"80%"}>
        <Stack
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 30 }}
          direction={{ base: "row", md: "column" }}
          backgroundImage={"/background.svg"}
          backgroundRepeat={"no-repeat"}
          backgroundPosition={"right"}
        >
          <Stack>
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
            <HStack maxW={{ md: "20em", lg: "35em" }}>
              <Text
                color={"gray.550"}
                fontSize={"2xl"}
                w={"100%"}
                textShadow={"-1px 0px gray"}
              >
                Here you'll find some of my favorite projects that I have worked
                on over the years. I made this site completely on my own using
                React and Next.js for the front end. I followed the next js
                tutorial here as a reference and then added my own content. The
                source code can be found on my github here. Take a look around
                the site, I hope you enjoy it! This site may change in
                appearance or function as time goes on as I learn new things
              </Text>
              {/* <Image style={{ zIndex: -1 }} src="/background.svg"></Image> */}
            </HStack>

            <Stack
              spacing={{ base: 2, sm: 4 }}
              direction={{ base: "column", sm: "row" }}
              className={styles.socialImages}
            >
              <Link
                href="https://www.linkedin.com/in/jack-brummer"
                passHref={true}
              >
                <Image
                  layout="intrinsic"
                  quality={100}
                  src="/images/logos/5282542_linkedin_network_social network_linkedin logo_icon.png"
                />
              </Link>

              <Image
                layout="intrinsic"
                quality={100}
                src="/images/logos/5282544_camera_instagram_social media_social network_instagram logo_icon.png"
              />

              <Image
                layout="intrinsic"
                quality={100}
                src="/images/logos/317712_code repository_github_repository_resource_icon.png"
              />

              <Image
                layout="intrinsic"
                quality={100}
                src="/images/logos/4691519_twitch_icon.png"
              />
            </Stack>
          </Stack>
        </Stack>
        <Stack mt={500} spacing={500}>
          <div ref={aboutRef}>
            <AboutMe paddingLeft={"7em"} />
          </div>

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
