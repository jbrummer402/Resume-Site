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
import { WithSubNavigation } from "../Nav_Components/WithSubNavigation";

export default function NavBar() {
  return <WithSubNavigation />;
}

