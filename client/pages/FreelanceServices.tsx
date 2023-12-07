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
  Input,
  Select,
  Textarea,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

export default function FreelanceServices() {
  return (
    <Container maxW={"80%"}>
      <Heading
        lineHeight={1.1}
        py={{ base: 20, md: 28 }}
        fontWeight={600}
        fontSize={["5xl", "6xl"]}
      >
        <Text as={"span"}>Freelancing Services</Text>
      </Heading>

      <Text fontSize={"2xl"}>
        I offer a wide variety of services, ranging from Tutoring, graphic
        design, video editing, and software development!
      </Text>
      <Text fontSize={"2xl"}>
        If you have any need for a project, please fill out this form!
      </Text>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input type='email' />
        <FormLabel>Type of Project</FormLabel>
        <Select placeholder='Select option'>
          <option value='option1'>Video Editing</option>
          <option value='option2'>Software Development</option>
          <option value='option3'>Tutoring</option>
        </Select>
      </FormControl>
    </Container>
  );
}
