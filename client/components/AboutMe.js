import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import styles from "../components/layout.module.css";

export default function AboutMe() {
  return (
    <div
      style={{
        height: "105vh",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <section
        id={"AboutMeSection"}
        className={styles.container}
        style={{
          display: "flex",
          flexDirection: "row",
          maxWidth: "80%",
          height: "500px",
        }}
      >
        <div className={styles.container}>
          <h1
            style={{ margin: "5rem 0 0 -2rem", fontWeight: "bold" }}
            className={utilStyles.headingLg}
          >
            About Me
          </h1>
          <h2>Hi there! My name is Jack Brummer</h2>

          <article>
            <p style={{ fontSize: "1.5rem", lineHeight: "1.6" }}>
              I am heavily interested in nearly all things computer science. I
              began programming in my early teens and fell in love with the
              problem solving that comes with it, and all the things you are
              able to do and create.
            </p>
            <p style={{ fontSize: "1.5rem", lineHeight: "1.6" }}>
              I have experience in various different languages and practices,
              including:
            </p>
            <ul
              style={{
                listStyleType: "circle",
                fontSize: "1.5rem",
                backgroundColor: "transparent",
              }}
            >
              <li>Java</li>
              <li>C++</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Relational Databases</li>
              <li>Functional Programming</li>
            </ul>
          </article>
        </div>
        <div
          style={{
            marginTop: "9rem",
          }}
        >
          <Image
            width={300}
            height={450}
            layout=""
            quality={100}
            src="/images/Jack_Brummer (1).jpg"
          />
        </div>
      </section>
    </div>
  );
}
