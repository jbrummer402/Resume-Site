import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Layout from "./layout";
import Grid from "@material-ui/core/Grid";
import React, { Component } from "react";

export default function ProjectGrid(props) {
  let projects = props.grid;
  console.log(projects);
  return projects.map((project) => {
    return (
      <Grid item style={{ margin: "2rem 2rem 2rem 2rem" }}>
        <Link href={`/Projects/${project}`}>
          <a style={{ color: "black" }}>
            <div
              style={{
                fontSize: "2.3rem",
                backgroundColor: "white",
                lineHeight: "1.3",
              }}
              className={styles.gridContainer}
            >
              {project[0]}
              <div
                style={{
                  fontWeight: "50",
                  fontSize: "1.5rem",
                  lineHeight: "1.6",
                }}
              >
                {project[1]}
              </div>
            </div>
          </a>
        </Link>
      </Grid>
    );
  });
}
