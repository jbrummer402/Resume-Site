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

export interface scrollMenu {
  items: string[];
}

export default function ScrollMenu(props: scrollMenu) {
  return (
    <Menu>
      <MenuList>
        {props.menu?.map((elem: string, idx) => {
          console.log(elem);
          return <MenuItem key={idx}> {elem}</MenuItem>;
        })}
      </MenuList>
    </Menu>
  );
}

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

// export default ScrollMenu;
