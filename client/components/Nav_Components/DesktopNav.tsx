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

import { NavItem, NavChild } from '../../types/nav_item.ts';

export const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Flex minWidth="max-content" alignItems='center' gap='2'>
      <Box p='2'>
        <Link href="/">
          <Image
            ml={{ base: "75px", sm: "inherit" }}
            h="3rem"
            src="\images\logos\IMG_0087.PNG"
          />
        </Link>
      </Box>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
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
                    <DesktopSubNav {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>

      ))}
      <Spacer />
      <ButtonGroup gap='2'>
        <Button colorScheme='blue'>Sign Up</Button>
        <Button variant='outline'>Log in</Button>
      </ButtonGroup>
    </Flex>
  );
};

function DesktopSubNav<NavChild>(child: NavChild){
  return (
    <Link
      href={child.href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {child.label}
          </Text>
          <Text fontSize={"sm"}>{child.sublabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
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
    label: "Contact + Resume",
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
