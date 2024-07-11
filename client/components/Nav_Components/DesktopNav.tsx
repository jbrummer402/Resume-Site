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
  HStack,
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

import { NavItem } from "../../types/nav_item.ts";
import { DesktopSubNav } from '../Nav_Components/DesktopSubNav';


export const DesktopNav = (props) => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Flex alignItems={"center"} {...props}>
      <Link mr="auto" href="/">
        <Image h="3rem" src="\images\logos\Final Iteration.PNG" />
      </Link>
      <HStack ml={"1.5rem"}>
      {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label} >
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? "#"}
                  fontSize={"md"}
                  color={linkColor}
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                  }}
                >
                  {navItem.label}
                </Link>
              </PopoverTrigger>

              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={"xl"}
                  bg={popoverContentBgColor}
                  p={2}
                  rounded={"xl"}
                  minW={"sm"}
                >
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav {...child}/>
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))
      }
      </HStack>
      <Spacer />
      <ButtonGroup >
        <Button colorScheme="blue" mr="auto">Sign Up</Button>
        <Button variant="outline">Log in</Button>
      </ButtonGroup>
    </Flex>
  );
};

const NAV_ITEMS: NavItem[] = [
  {
    label: "Blog",
    href: "/hell_on_wheels",
  },
  {
    label: "Freelance Services",
    children: [
      {
        label: "Submit a job request",
        sublabel: "Fill out this form if you need a job done!",
        href: "/freelanceservices",
      },
      {
        label: "View my work",
        sublabel: "Check out some of the projects I've worked on",
        href: "/personal_projects",
      },
    ],
    href: "/FreelanceServices",
  },
  {
    label: "Links",
    href: "https://linktr.ee/jackbrummer",
  },
];

// const NAV_ITEMS = [
//   {
//     label: "Blog",
//     href: "/hell_on_wheels",
//   },
// {
//   label: "Freelance Services",
//   children: [
//     {
//       label: "submit a job request",
//       sublabel: "fill out this form if you need a job done!",
//       href: "/freelanceservices",
//     },
//     {
//       label: "view my work",
//       sublabel: "check out some of the projects i've worked on",
//       href: "/personalprojects",
//     },
//   ],
//   href: "/freelanceservices",
// },
// {
//   label: "Contact + Resume",
//   href: "https://linktr.ee/jackbrummer",
// },
//   // {
//   //   label: "comment",
//   //   href: "/comment",
//   // },
// ];
