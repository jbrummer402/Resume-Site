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
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

import { DesktopNav } from '../Nav_Components/DesktopNav';

export default function NavBar () {
  
  return (
    <WithSubnavigation />
  );

}


export function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box position={"fixed"} w={"full"} zIndex={1}> 
    <Box
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        px={{ base: 3 }}
        borderBottom={2}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.100", "gray.800")}
        align={"center"}
      >
      <Flex
        flex={{ base: 1, md: "auto" }}
        display={{ base: "flex", md: "none" }}
      >
        <IconButton
          onClick={onToggle}
          icon={
            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
          }
          variant={"ghost"}
          aria-label={"Toggle Navigation"}
        />
      </Flex>

      <DesktopNav />
    </Box>
      <Collapse in={isOpen} animateOpacity>
      </Collapse>
    </Box>
  );
}

const nav_items = [
  {
    label: "blog",
    href: "/hell_on_wheels",
  },
  {
    label: "freelance services",
    children: [
      {
        label: "submit a job request",
        sublabel: "fill out this form if you need a job done!",
        href: "/freelanceservices",
      },
      {
        label: "view my work", 
        sublabel: "check out some of the projects i've worked on",
        href: "/personalprojects",
      },
    ],
    href: "/freelanceservices",
  },
  {
    label: "contact + resume",
    href: "https://linktr.ee/jackbrummer",
  },
  // {
  //   label: "comment",
  //   href: "/comment",
  // },
];
