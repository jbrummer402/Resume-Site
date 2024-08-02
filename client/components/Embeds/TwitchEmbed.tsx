"use client";
import { Box } from "@chakra-ui/react";
import { TwitchEmbed } from "react-twitch-embed";

export default function TwitchBox(props) {
  return (
    <Box borderRadius="lg" overflow="hidden">
      <TwitchEmbed channel={"L4ntern_99"} />
    </Box>
  );
}
