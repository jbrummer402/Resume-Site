import { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import globalStyles from "../styles/global.css";
import "bootstrap/dist/css/bootstrap.css";

import { useRouter } from "next/router";
import Layout from "../components/layout";

// https://codesandbox.io/s/answert-nextjs-framer-motion-scroll-to-id-bkd3d?file=/pages/_app.tsx:213-665
const handExitComplete = () => {
  if (typeof window !== "undefined") {
    const hashId = window.location.hash;

    console.log({ location: window.location, hashId });

    if (hashId) {
      const element = document.querySelector(hashId);
      console.log({ element });

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
    }
  }
};

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Layout />
      <AnimatePresence exitBeforeEnter onExitComplete={handExitComplete}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  );
}
