import "bootstrap/dist/css/bootstrap.css";

import { ChakraProvider } from "@chakra-ui/react";
import { Analytics } from "@vercel/analytics/react";
import { useRouter } from "next/router";
import NavBar from "../components/Nav_Components/NavBar";

import App, { AppContext, AppInitialProps, AppProps } from "next/app";

import { useRef } from "react";

export default function ResumeApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <ChakraProvider>
        <NavBar  />
        <Component  {...pageProps} key={router.route} />
        <Analytics />
      </ChakraProvider>
    </>
  );
}

