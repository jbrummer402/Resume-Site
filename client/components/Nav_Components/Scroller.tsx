'use client';
import { HamburgerIcon, ArrowUpIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Box, AbsoluteCenter, Center } from "@chakra-ui/react";
import Link from "next/link";

export default function Scroller (props) {

  return(
    <AbsoluteCenter position="fixed"mt="90vh" axis="horizontal">
        <Link href={props.section} >
          <ChevronDownIcon boxSize={10}/> 
        </Link>
    </AbsoluteCenter>
  )

}
