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

import { useRef } from 'react'



export default function Index() {


  return (
    <>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <header>
          <title>Home</title>
        </header>
         
        <Stack maxW="100%" spacing={"35vh"} direction='column' marginRight='2rem'>
          <LandingLayout />
          <AboutMe id="#foo" />
          <Interests />
          <Education />
          <Research />
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
