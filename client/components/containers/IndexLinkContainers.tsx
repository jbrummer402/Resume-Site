"use client";
import { HStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { BsTwitch, BsInstagram, BsLinkedin } from "react-icons/bs";
import { SiKofi } from "react-icons/si";
export default function IndexLinkContainer(props) {
  // Function to get current filenames
  // in directory with specific extension
  return (
    <motion.div>
      <HStack spacing={"1.5rem"}>
        <BsTwitch size={50} />
        <BsLinkedin size={50} />
        <BsInstagram size={50} />
        <SiKofi size={50} />
      </HStack>
    </motion.div>
  );
}
