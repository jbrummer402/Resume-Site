import Head from "next/head";
import Link from "next/link";
import { Container, Heading, Text } from "@chakra-ui/react";

import { FreelanceForm } from "../../components/containers/freelance_form";

export default function FreelanceServices() {
  const handleSubmit = (e) => {
    let formData = e.target.value;
    console.log(formData);
  };

  return (
    <Container maxW={"80%"}>
      <Heading
        lineHeight={1.1}
        pt={{ base: 20, md: 28 }}
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
        If you have any projects you need done or general consultation, please
        go to my freelance profile links!
      </Text>
      <FreelanceForm />
    </Container>
  );
}
