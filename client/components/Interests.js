import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import styles from "../components/layout.module.css";

export default function Interests() {
  return (
    <div
      style={{
        marginTop: "20%",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <section
        id={"InterestSection"}
        className={styles.container}
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100vw",
          height: "auto",
        }}
      >
        <div className={styles.container}style={{ maxWidth: "50%"}}>
          <h1
            style={{ fontWeight: "bold", fontSize: "3.5rem" }}
            className={utilStyles.headingLg}
          >
            Interests and Projects
          </h1>

          <article style={{ fontSize: "2.2rem", lineHeight: "1.6"}}>
            <p>
              Throughout my years at school and in my personal life I've become
              interested in several different areas, inside and out of computer
              science.
            </p>
            <p>
              I began programming in Java and become heavily interested in the
              object oriented programming paradigm. This then led me to try out
              other object oriented languages like C++ and Python. When I
              started at Stevens, I began to have more assignments that relied
              on a more functional programming way of execution. The class where
              this was most critical ended up being one of my favorite classes
              I've taken: Programming languages.
            </p>
            <p style={{ fontSize: "1.5rem", lineHeight: "1.6" }}></p>
          </article>
        </div>
      </section>
    </div>
  );
}
