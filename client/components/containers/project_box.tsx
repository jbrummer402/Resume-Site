import {
  Container,
  Box,
  Heading
} from '@chakra-ui/react';

export default function ProjectBox(props) {

  return (
     <Box boxShadow="outline"> 
      <Heading>
      {props.title}
      </Heading>
     </Box>
  );


}
