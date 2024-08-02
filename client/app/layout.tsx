"use client";
import "bootstrap/dist/css/bootstrap.css";

import { ChakraProvider } from "@chakra-ui/react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { TypingText } from "../components/AnimationComponents/TypingText";
import NavBar from "../components/Nav_Components/NavBar";
import theme from "../styles/theme";
import {
  AnimatePresence,
  motion,
  useInView,
  useIsPresent,
  usePresence,
} from "framer-motion";
import { useEffect, useRef } from "react";

import { AnimationProps } from "../components/AnimationComponents/TypingText";

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
export function StartingAnimation({ isVisible }) {
  let present = useIsPresent();
  useEffect(() => {
    !present && console.log("Ive been removed burrrrrrrrrruhjasd");
  }, [present]);

  return (
    <motion.div
      key={"starting-animation"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <TypingText {...textAnimation} />
    </motion.div>
  );
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ display: "inline-block" }}>
        <ChakraProvider theme={theme}>
          <NavBar />
          <Analytics />
          <SpeedInsights />
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
