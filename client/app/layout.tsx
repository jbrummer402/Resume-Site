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
