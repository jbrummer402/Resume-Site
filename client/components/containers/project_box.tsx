import {
  Container,
  Box,
  Heading,
  Card,
  Image,
  Stack,
  CardBody,
  Button,
  Text,
  CardFooter
} from '@chakra-ui/react';

export default function ProjectBox(props) {
  return (
    <Card
      mb="2rem"
      direction={{ base: 'row', sm: 'column' }}
      overflow='hidden'
      variant='outline'
    >
      <Stack>
        <CardBody>
          <Heading size='md'>{props.title}</Heading>
          <Text py='2'>

          </Text>
        </CardBody>

        <CardFooter>

        </CardFooter>
      </Stack>
    </Card>
  );


}
