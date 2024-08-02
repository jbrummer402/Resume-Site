import {
  Image,
  Box,
  Flex,
  Stack,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  HStack,
  Spacer,
  useColorModeValue,
  Switch,
  useColorMode,
} from "@chakra-ui/react";

import { NavItem } from "../../types/nav_item";
import { DesktopSubNav } from "../Nav_Components/DesktopSubNav";

export const DesktopNav = (props) => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex alignItems={"center"} {...props}>
      <Link mr="auto" href="/">
        <Image rounded="md" h="3rem" src="\images\logos\Final Iteration.PNG" />
      </Link>
      <HStack ml={"1.5rem"}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.sublabel}>
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
                      <DesktopSubNav key={navItem.href} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </HStack>
      <Spacer />
      <Switch size="md" onChange={toggleColorMode} />
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
        href: "/view_my_work",
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
