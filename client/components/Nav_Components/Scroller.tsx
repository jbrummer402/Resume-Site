'use client';
import { HamburgerIcon, ArrowUpIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Box, AbsoluteCenter, Center } from "@chakra-ui/react";
import Link from "next/link";

export default function Scroller (props) {

  return(
    <AbsoluteCenter mt="25rem" position="fixed"mt="35rem" axis="horizontal">
        <Link href={props.section} >
          <ChevronDownIcon /> 
        </Link>
    </AbsoluteCenter>
  )

}
