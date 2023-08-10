import "bootstrap/dist/css/bootstrap.css";

import { ChakraProvider } from "@chakra-ui/react";
import { Analytics } from "@vercel/analytics/react";
import { useRouter } from "next/router";
import Layout from "../components/layout";

import { useRef } from "react";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <ChakraProvider>
        <Layout />
        <Component {...pageProps} key={router.route} />
        <Analytics />
      </ChakraProvider>
    </>
  );
}
