import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  GridItem,
  Heading,
  Stack,
} from "@chakra-ui/react";

export default async function GithubCard(props) {
  const languages = await fetch(`${props.url}/languages`);
  const langlist = await languages.json();
  return (
    <GridItem>
      <Card>
        <CardHeader>
          <Heading size={"md"}>{props.name}</Heading>
        </CardHeader>
        {Object.keys(langlist).map((item) => (
          <CardFooter key={item}>{item}</CardFooter>
        ))}
      </Card>
    </GridItem>
  );
}
