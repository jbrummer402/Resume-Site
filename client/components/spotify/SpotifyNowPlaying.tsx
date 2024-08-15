"use client";
import { useEffect, useState } from "react";
import { getCurrentlyPlaying } from "../../lib/api/data";
import { Text, Box, Heading } from "@chakra-ui/react";

export default function SpotifyNowPlaying(props) {
  const [whatIsPlaying, setWhatIsPlaying] = useState({});
  return (
    <Box borderRadius="md" bg={"green"}>
      <Heading ml={"1rem"}>What I'm listening to</Heading>
      <Text>Current Song</Text>
    </Box>
  );
}
