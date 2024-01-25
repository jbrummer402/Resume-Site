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

import { Field, Form, Formik } from 'formik';

import { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';


export default function FreelanceServices() {
  const recaptcha = useRef();
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleSubmit = (e) => {
    let formData = e.target.value;
    console.log(formData);
  
  }

  console.log(process.env.REACT_APP_SITE_KEY);
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


      <Formik
        initialValues={{category : " ", description : " "}} 
      >

          <Form>
            <Field as='select' name='category'>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <Select {...field} placeholder='Select'>
                    <option>Tutoring</option>
                    <option>Video Editing</option>
                    <option>Software Development</option>
                    <option>Machine Learning</option>
                  </Select>
                </FormControl>
              )}
            </Field>
            <Field name='description' required>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel>Job Description</FormLabel>
                  <Textarea {...field} placeholder='Please be as descriptive as you can :)' />
                </FormControl>
              )}
            </Field>
            <Button
              mt={4}
              colorScheme='teal'
              type='submit'
            >
              Submit
            </Button>

          </Form>

      </Formik>


    </Container>

  );
}
