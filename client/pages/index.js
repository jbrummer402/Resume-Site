import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../components/layout.module.css";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import AboutMe from "../components/AboutMe";
import Interests from "../components/Interests";
import Education from "../components/Education";
import Research from "../components/Research";
import LandingLayout from '../components/LandingLayout'
import {HamburgerIcon} from '@chakra-ui/icons'

import { Heading, IconButton } from '@chakra-ui/react'
import { Stack, HStack, VStack, Container, Text } from '@chakra-ui/react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'

import { useRef, useEffect } from 'react'



export default function Index() {

   let element = null;

  useEffect(() => {
    element = document.getElementById("about")
    console.log(element)
})

function scroll() {
    console.log(element)
    if (element) {
      element.scrollIntoView({
        block: 'start',
        inline: 'nearest',
        behavior: 'smooth', 
        scrollTarget: document.body // Pass in the scroll container here
      });
    }
    else {
      console.log("no element")
    }
}  


  return (
    <>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <header>
          <title>Home</title>
        </header>
        <Menu>
                <MenuButton
                    as={IconButton}
                    aria-label='Options'
                    icon={<HamburgerIcon />}
                    variant='outline'
                    />
                <MenuList>
                    <MenuItem onClick={() => scroll()}>
                        About Me
                    </MenuItem>
                    <MenuItem>
                        Education
                    </MenuItem>
                    <MenuItem >
                        Research
                    </MenuItem>
                    <MenuItem  >
                        Resume
                    </MenuItem>
                </MenuList>
            </Menu> 
        <Stack  spacing={"50vh"} direction='column'>
          <LandingLayout />
          <AboutMe paddingLeft={'7em'} id="about" />
          <Education />
          <Research />
          <Interests />
        </Stack>
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
