import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../components/layout.module.css";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import AboutMe from "../components/AboutMe";
import Interests from "../components/Interests";
import Education from "../components/Education";
import Research from "../components/Research";

import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

export default function Index() {
  return (
    <>
      <ul
        style={{
          fontSize: "2.0rem",
          position: "fixed",
          right: "0",
          margin: "5rem 1rem 0 0",
          backgroundColor: "rgba(0,0,0,0)",
          borderLeft: "1px solid black",
        }}
      >
        <div style={{}}>
        <li style={{ display: "inline-flex" }}>
          <ScrollLink
            smooth={true}
            style={{
              marginLeft: "-25%"
            }}
            to="AboutMeSection"
          >
            About me
          </ScrollLink>
        </li>
        <br />
        <li style={{ display: "inline-flex" }}>
          <ScrollLink
            smooth={true}
            style={{
              marginLeft: "-15%"
            }}
            to="InterestSection"
          >
            Interests and Projects
          </ScrollLink>
        </li>
        <br />
        <li style={{ display: "inline-flex" }}>
          <ScrollLink
            smooth={true}
            style={{
              marginLeft: "-25%"
            }}
            to="EducationSection"
          >
            Education
          </ScrollLink>
        </li>
        <br />
        <li style={{ display: "inline-flex" }}>
          <ScrollLink
            smooth={true}
            style={{
              marginLeft: "-25%"
            }}
            to="ResearchSection"
          >
            Research
          </ScrollLink>
        </li>
        </div>
      </ul>
      <div>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        <div
        >
          <header>
            <title>Home</title>
          </header>
          <div>
            <section
                          className={utilStyles.headingLg}
                          style={{
                              zIndex: "-1",
                              backgroundImage: "url(/images/FrontPageBackground.svg)",
                              backgroundRepeat: "no-repeat",
                              lineHeight: "2.1",
                              position: "absolute",
                              minHeight: "100%",
                              maxWidth: "80%",
                              height: "auto",
                              top: "5vh",
                              backgroundSize: "cover",
                              backgroundPositionX: "-20vw"
                            }}
            >
                          <div className={styles.container} style={{

                              
                              
                          }}>
                <h1 style={{ fontWeight: "bold", fontSize: "2.7rem" }}> Welcome to My Website! </h1>
                <p />
                Here you'll find some of my favorite projects that I have worked
                on over the years.
                <p />
                I made this site completely on my own using React and Next.js
                for the front end. I followed the next js tutorial here as a
                reference and then added my own content.
                <p />
                The source code can be found on my github
                <Link href="https://www.github.com/jbrummer402/Resume-site.git">
                  <a target="none"> here</a>
                </Link>
                <p /> Take a look around the site, I hope you enjoy it!
                <p />
                This site may change in appearance or function as time goes on
                as I learn new things
                <div>
                  <div className={styles.socialImages}>
                    <Link
                      href="https://www.linkedin.com/in/jack-brummer"
                      passHref={true}
                    >
                      <Image
                        width={48}
                        height={48}
                        layout="intrinsic"
                        quality={100}
                        src="/images/logos/5282542_linkedin_network_social network_linkedin logo_icon.png"
                      />
                    </Link>
                  </div>
                  <div className={styles.socialImages}>
                    <Image
                      width={48}
                      height={48}
                      layout="intrinsic"
                      quality={100}
                      src="/images/logos/5282544_camera_instagram_social media_social network_instagram logo_icon.png"
                    />
                  </div>
                  <div className={styles.socialImages}>
                    <Image
                      width={48}
                      height={48}
                      layout="intrinsic"
                      quality={100}
                      src="/images/logos/317712_code repository_github_repository_resource_icon.png"
                    />
                  </div>
                  <div className={styles.socialImages}>
                    <Image
                      width={48}
                      height={48}
                      layout="intrinsic"
                      quality={100}
                      src="/images/logos/4691519_twitch_icon.png"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <AboutMe />
        <Interests />
        <Education />
        <Research />
      </div>
    </>
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
