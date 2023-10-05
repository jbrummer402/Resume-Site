import React, { FC } from "react";
import Link from "next/link";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  HStack,
  IconProps,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";

export interface MenuItems {
  menuList: string[];
}

const ScrollMenu = (props) => {
  console.log(props);
  return (
    <Menu>
      <MenuButton
        mt="8rem"
        position="relative"
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
      />
      <MenuList>
        {props.menuList.menuList.map((elem: string, idx) => {
          console.log(elem);
          return <MenuItem key={idx}>{elem}</MenuItem>;
        })}
      </MenuList>
    </Menu>
  );
};

// const ScrollMenu: React.FC = () => {
//   let scrollItems = ["About me", "Education", "Interests"];
//   return (
//     <Menu>
//       <MenuList>
//         <MenuItem>test</MenuItem>
//       </MenuList>
//     </Menu>
//   );
// };

export default ScrollMenu;
