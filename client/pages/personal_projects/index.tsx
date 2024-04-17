
import axios from "axios";
import { Heading, Container, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ProjectBox from "../../components/containers/project_box"

export default function PersonalProjects(params:type) {
  let [repos, setRepos] = useState([]);

  const getRepos = async () => {
    let data = await fetch("http://127.0.0.1:8000/app/repos");
    return data;
  };
  useEffect(() => {
    (async () => {
      try {
        console.log("Fetching repos");
        const response = await getRepos();
        let data = await response.text(); // Extract JSON data from response

        data = JSON.parse(data);
        console.log(JSON.parse(data));
        setRepos(JSON.parse(data));
      } catch (err) {
        console.log("Error occurred when fetching books");
      }
    })();
  }, []);

  return (
    <Container maxW={"80%"}>
      <Heading pt="10rem"> Personal Projects </Heading>

      <Text fontSize="2xl">
        These projects include those from my time in college and also from
        personal study.
      </Text>
      {repos.map((repo) => {
        return (
          <ProjectBox
            key={repo.id}
            title={repo.name}
            description={repo.description}
            link={repo.link}
          />
        );
      })}
    </Container>
  );
}

export const getStaticProp = (async () => {

  try {
    const data = await getRepos();
  } catch (e) {
    console.error("Error getting repos");
     
  }

})
