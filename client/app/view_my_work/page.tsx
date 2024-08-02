import { Container, Grid, Heading, Text } from "@chakra-ui/react";
import CategoryButtons from "../../components/containers/PortfolioContainers/CategoryButtons";
import { getRepos } from "../../lib/api/data";
import GithubCard from "../../components/containers/PortfolioContainers/Github";
const categories = ["Code", "Art", "Videos"];

export default async function WorkPage() {
  const reposList = await getRepos();

  return (
    <Container maxW={"80%"}>
      <Heading
        lineHeight={1.1}
        pt={{ base: 20, md: 28 }}
        fontWeight={600}
        fontSize={["5xl", "6xl"]}
      >
        <Text as={"span"}>Portfolio Work</Text>
      </Heading>

      <Text fontSize={"2xl"}>
        I have many interests, and with that comes many hobbies, and with that
        comes many projects. Here's some of the ones I'm the most proud of
      </Text>
      <CategoryButtons categories={categories} />
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        {reposList.map((repo) => (
          <GithubCard {...repo} />
        ))}
      </Grid>
    </Container>
  );
}
