import Layout from "../components/layout";
import Head from "next/head";
import styles from "../components/layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Grid from "@material-ui/core/Grid";
import ProjectGrid from "../components/projectGrid";

import * as React from "react";

export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume and Skills</title>
      </Head>
      <section>
        <h1 className={utilStyles.heading2Xl}>Resume and Skills</h1>
        <p
          style={{ fontSize: "1.5rem", lineHeight: "1.6", marginLeft: "1rem" }}
        ></p>
      </section>
    </>
  );
}