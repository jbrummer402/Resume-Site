import {
  Image,
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Heading,
  ButtonGroup,
  Spacer,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Center,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

import { DesktopNav } from "../Nav_Components/DesktopNav";

export default function NavBar() {
  return <WithSubnavigation />;
}

export function WithSubnavigation() {
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

        <Flex
          display={{ base: "flex", md: "none" }}
          justify="center"
          p={"2"}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? (
                <CloseIcon w={3} h={3} />
              ) : (
                <HamburgerIcon w={5} h={5} />
              )
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
            mr="auto"
          />
          <Link mr="auto" href="/">
            <Image h="3rem" src="\images\logos\IMG_0087.PNG" />
          </Link>
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Box p={{ md: "2" }} display={{ base: "none", md: "flex" }}>
            <Link href="/">
              <Image h="3rem" src="\images\logos\IMG_0087.PNG" />
            </Link>
          </Box>
          <Flex display={{ base: "none", md: "flex" }}>
            <DesktopNav />
          </Flex>
        </Flex>
      </Box>
      <Collapse in={isOpen} animateOpacity></Collapse>
    </Box>
  );
}

