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

  const handleScroll = (e) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    let targetId = href.replace(/.*\#/, "");
    let elem = document.getElementById(targetId);
    console.log(elem)
    window.scrollTo({
      top: elem?.getBoundingClientRect().top,
      behavior: "smooth",
    });
  };

  

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
                <Link href="#about" className="btn" >
                  <a onClick={handleScroll}>
                  <MenuItem>
                      About Me
                  </MenuItem>
                  </a>
                            
                </Link>
                <Link href="#education" className="btn" >
                  <a onClick={handleScroll}>
                  <MenuItem>
                    Education
                  </MenuItem>
                  </a>
                            
                </Link>
                <Link href="#resume" className="btn" >
                  <a onClick={handleScroll}>
                  <MenuItem>
                    Resume
                  </MenuItem>
                  </a>
                </Link>
              </MenuList>
        </Menu>

        <Stack spacing={"50vh"} direction='column'>
          <LandingLayout />
          <AboutMe paddingLeft={'7em'} id= {"about"} />
          <Education id={"education"}/>
          <Interests id={"resume"}/>
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
