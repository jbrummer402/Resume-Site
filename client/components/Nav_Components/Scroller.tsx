"use client";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { AbsoluteCenter } from "@chakra-ui/react";
import Link from "next/link";

export default function Scroller(props) {
  return (
    <AbsoluteCenter axis="horizontal" {...props}>
      <Link href={props.section}>
        <ChevronDownIcon boxSize={10} />
      </Link>
    </AbsoluteCenter>
  );
}
