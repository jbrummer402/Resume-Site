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
} from "@chakra-ui/react";

import { useState } from "react";

import { Field, Form, Formik } from "formik";

export default function FreelanceForm() {
  const SERVICE_OPTIONS = [
    { name: "Graphic Design" },
    { name: "Video Editing" },
    { name: "Software Development" },
    { name: "Tutoring/Teaching" },
  ];

  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const sendForm = (e) => {
    e.preventDefault();
  };

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
      <form onSubmit={sendForm}>
        <FormControl>
          <Select
            onChange={(e) => setCategory(e.currentTarget.value)}
            placeholder="Select Service"
          >
            {SERVICE_OPTIONS.map((e, key) => (
              <option id={key}>{e.name}</option>
            ))}
          </Select>
          <Input
            onChange={(e) => setDescription(e.currentTarget.value)}
            placeholder="Give me some more details on what you need and I'll get
          back to you"
          />
          <Button type="submit">Submit</Button>
        </FormControl>
      </form>
    </Container>
  );
}
