import Head from "next/head";
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
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Formik,
} from "@chakra-ui/react";

export default function Comment(props) {
  return (
    <>
      <Container maxW={"80%"}>
        <Heading
          lineHeight={1.1}
          py={{ base: 18, md: 24 }}
          fontWeight={600}
          fontSize={{ base: "3xl", md: "5xl" }}
        >
          <Text as={"span"}>Questions? Comments?</Text>
        </Heading>

        <FormControl isRequired>
          <Textarea placeholder="Leave below any thoughts you have on my site. I welcome all feedback!" />
          <Button type="submit" my={{ base: 18, md: 23 }}>
            Submit
          </Button>
        </FormControl>
      </Container>
    </>
  );
}
