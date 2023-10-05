import "bootstrap/dist/css/bootstrap.css";

import { ChakraProvider } from "@chakra-ui/react";
import { Analytics } from "@vercel/analytics/react";
import { useRouter } from "next/router";
import Layout from "../components/layout";

import App, { AppContext, AppInitialProps, AppProps } from "next/app";

import { useRef } from "react";

export default function ResumeApp({ Component, pageProps }: AppProps) {
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

ResumeApp.getInitialProps = async (
  context: AppContext
): Promise<AppInitialProps> => {
  const ctx = await App.getInitialProps(context);

  return { ...ctx };
};
