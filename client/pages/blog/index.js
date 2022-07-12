import Head from "next/head";
import styles from "../../components/layout.module.css";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import Layout from "../../components/layout";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import React from "react";
import MarkdownInput from "react-markdown";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import { ObjectID } from "bson";

const blob = require("blob");
const fs = require("fs");

const input = `<div class="note">

Some *emphasis* and <strong>strong</strong>!
</div>`;

export default function blog(props) {
  let [formHidden, setFormHidden] = useState(true);
  let [blogPosts, setBlogPosts] = useState([]);

  const [post, setPost] = useState("");

  const handlePostChange = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);

    var a = document.createElement("a");

    a.download = `${new Date().toISOString()}.md`;
    a.href = URL.createObjectURL(
      new Blob([e.target[0].value], { type: "text/plain" })
    );
    a.click();
  };

  const onButtonClick = () => {
    setFormHidden(() => !formHidden);
  };

  const handleSubmit = (e) => {
    alert("Are you sure you want to post this?");
    console.log(e.target[0].value);
  };

  return (
    <>
      <ReactMarkdown source={post}> </ReactMarkdown>
      <div
        style={{
          height: "75vh",
          width: "100vw",
          overflow: "auto",
          backgroundImage: "url(/images/1209438.jpeg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <div
          style={{
            maxWidth: "50%",
            margin: "10rem auto",
            maxHeight: "20%",
          }}
        >
          <h1
            style={{
              color: "Button",
              fontSize: "6rem",
              fontWeight: "bold",
            }}
            className={utilStyles.headingXl}
          >
            Blog
          </h1>
          <h2
            style={{
              lineHeight: "1.6",
              padding: "2rem",
              color: "grey",
            }}
            className={utilStyles.headingLg}
          >
            I decided to write blog on this site for numerous topics. These can
            include current events or opinion articles on current events in
            computer science or accessibility. Feel free to share anything on
            here with friends!
          </h2>
        </div>
      </div>
      <div
        style={{
          lineHeight: "1.6",
          margin: "2rem",
        }}
      >
        <h2>Blog posts</h2>
        <h3>No Posts yet</h3>
        <Button
          style={{ marginTop: "2rem", fontSize: "1.3rem" }}
          onClick={onButtonClick}
        >
          Make Post
        </Button>
      </div>

      {formHidden ? (
        <div></div>
      ) : (
        <div style={{ fontSize: "2rem", height: "70vh", marginLeft: "2vw" }}>
          <form
            onSubmit={handlePostChange}
            id="confirmationForm"
            name="confirmationForm"
            method="post"
          >
            <textarea
              id="confirmationText"
              class="text"
              cols="86"
              rows="20"
              name="confirmationText"
              form="confirmationForm"
            ></textarea>
            <input type="submit" />
          </form>
        </div>
      )}
    </>
  );
}
