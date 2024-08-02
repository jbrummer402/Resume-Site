import { motion } from "framer-motion";
import { Center, Container, Text } from "@chakra-ui/react";
import { useState } from "react";
import Scroller from "../Nav_Components/Scroller";

export interface AnimationDetails {
  hidden: {};
}

export interface TextAndFont {
  text: string;
  fontSize: string;
}
export interface AnimationProps {
  texts: TextAndFont[];
  animationVariant?: {
    hidden: {
      opacity: number;
      x?: number;
      y?: number;
    };
    visible: {
      opacity: number;
      x?: number;
      y?: number;
    };
  };
}
const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "linear",
      times: [0, 0.5, 0.5, 1],
    },
  },
};

const CursorBlink = () => {
  return (
    <motion.span
      variants={cursorVariants}
      animate="blinking"
      className="inline-block h-5 w-[1px] translate-y-1 bg-slate-900"
    >
      |
    </motion.span>
  );
};

export const TypingText = ({ texts, animationVariant }: AnimationProps) => {
  let [displayArrow, setDisplayArrow] = useState(false);
  return (
    <Container mt="50vh" maxW={"80vw"} mb={"20vh"}>
      <motion.span
        className="inline-block"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.15 }}
        onAnimationComplete={() => setDisplayArrow(true)}
      >
        {texts.map((item) => (
          <>
            {item.text.split("").map((char) => (
              <motion.span
                key={char}
                style={{ fontSize: item.fontSize }}
                variants={animationVariant}
              >
                {char}
              </motion.span>
            ))}
            <Text />
          </>
        ))}
      </motion.span>
      {/* <CursorBlink /> */}
      {/* {displayArrow ? <Scroller section="#index" /> : ""} */}
    </Container>
  );
};
