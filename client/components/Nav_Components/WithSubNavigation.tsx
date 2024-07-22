import {
  Image,
  Box,
  Flex,
  IconButton,
  Collapse,
  Link,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import { DesktopNav } from "../Nav_Components/DesktopNav";
import MobileNav from "../Nav_Components/MobileNav";

export function WithSubNavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box position={"fixed"} w={"full"} zIndex={1}>
      <Box
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        borderBottom={2}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.100", "gray.800")}
      >
        <Flex display={{ base: "flex", md: "none" }} justify="center" p={"2"}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
            mr="auto"
          />
          <Link mr="auto" href="/">
            <Image h="3rem" src="\images\logos\Final Iteration.PNG" />
          </Link>
        </Flex>
        <Box display={{ base: "none", md: "inherit" }}>
          <DesktopNav p={3} />
        </Box>
      </Box>
      <Collapse in={isOpen} animateOpacity></Collapse>
    </Box>
  );
}
