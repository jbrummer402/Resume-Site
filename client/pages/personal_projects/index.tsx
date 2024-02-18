

import { Heading, Container, Text } from "@chakra-ui/react";
import ProjectBox from "../../components/containers/project_box"

export default function PersonalProjects(params:type) {
  

  return (
    <Container
      maxW={"80%"}
    >

      <Heading pt="10rem"> Personal Projects </Heading>

      <Text fontSize='2xl'>
        These projects include those from my time in college and also from personal study. 
      </Text>
      <ProjectBox />

    </Container>);
}
