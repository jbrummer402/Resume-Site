import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import styles from "../components/layout.module.css";

export default function Research() {
  return (
    <div
      style={{
        height: "105vh",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <section
        id={"ResearchSection"}
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
            Education
          </h1>
          <h2>Hello, my name is Jack Brummer</h2>

          <article>
            <p style={{ fontSize: "1.5rem", lineHeight: "1.6" }}></p>
          </article>
        </div>
        <div
          style={{
            marginTop: "9rem",
          }}
        ></div>
      </section>
    </div>
  );
}
