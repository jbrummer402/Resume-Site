import {
  AnimatePresence,
  motion,
  useInView,
  useIsPresent,
  usePresence,
} from "framer-motion";

import { AnimationProps, TypingText } from "./TypingText";

import { useEffect } from "react";
import { Container } from "@chakra-ui/react";

const textAnimation: AnimationProps = {
  texts: [
    { text: "Hello there!", fontSize: "8vw" },
    { text: "My name is Jack Brummer", fontSize: "4vw" },
  ],
  animationVariant: {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  },
};
export default function StartingAnimation({ isVisible }) {
  let present = useIsPresent();
  useEffect(() => {
    !present && console.log("Ive been removed burrrrrrrrrruhjasd");
  }, [present]);

  return (
    <Container maxW={"90%"}>
      <motion.div
        key={"starting-animation"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <TypingText {...textAnimation} />
      </motion.div>
    </Container>
  );
}
