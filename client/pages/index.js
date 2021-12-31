import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../components/layout.module.css";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";

export default function Index() {
  return (
    <div>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div>
        <header>
          <title>Home</title>
        </header>
        <div className={utilStyles.backImg}>
          <Image
            layout="fill"
            objectFit="cover"
            quality={100}
            src="/images/1668941.jpeg"
          />
        </div>
        <section
          style={{
            padding: "2rem 2rem",
          }}
          className={utilStyles.headingLg}
        >
          <div className={styles.headerHomeImage}>
            <Image
              height="1950px"
              width="1500px"
              src="/images/Jack_Brummer (1).jpg"
            />
          </div>
          <div style={{ fontFamily: "sans-serif" }}>
            <h1 style={{ fontWeight: "bold" }}> Welcome to my website! </h1>
            <p />
            Here you'll find some of my favorite projects that I have worked on
            over the years.
            <p />
            I made this site completely on my own using React and Next.js for
            the front end. I followed the next js tutorial here as a reference
            and then added my own content.
            <p /> I have yet to finish the backend for it, but be on the lookout
            <p />
            The source code can be found on my github
            <Link href="https://www.github.com/jbrummer402/Resume-site.git">
              <a target="none"> here</a>
            </Link>
            <p /> Take a look around the site, I hope you enjoy it!
            <p />
            This site may change in appearance or function as time goes on as I
            learn new things, so be prepared
          </div>
        </section>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
