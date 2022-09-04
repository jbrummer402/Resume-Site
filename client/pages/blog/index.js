import Head from "next/head";
import styles from "../../components/layout.module.css";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import Layout from "../../components/layout";
import { Form, Button } from "react-bootstrap";
import { useEffect, useReducer, useState } from "react";
import React from "react";
import uuid from "react-uuid";

import ReactMarkdown from "react-markdown";

import frontmatter from "front-matter";

import axios from "axios";

import { ObjectID } from "bson";

var Blob = require("blob");
const fs = require("fs");
const markdown = require("markdown").Markdown;

export default function blog(props) {
  let [formHidden, setFormHidden] = useState(true);
  let [blogPosts, setBlogPosts] = useState([]);

  function reducer(state, singlePost) {
    return { blogPosts: blogPosts + singlePost };
  }

  const [state, dispatch] = useReducer(reducer, { blogPosts: [] });

  const handlePostChange = async (e) => {
    e.preventDefault();

    let text = e.target[0].value;
    let md = frontmatter(text);
    let postId = new ObjectID();
    try {
      let { data } = await axios
        .post("http://localhost:3001/blog", {
          id: postId,
          date: new Date().toString(),
          title: md.attributes.title,
          content: md.body,
        })
        .then((payload) =>
          dispatch({ state: blogPosts, singlePost: data.data })
        );

      setBlogPosts(data.data);
    } catch (e) {
      return e;
    }
  };

  useEffect(async () => {
    console.log("UseEffect fired");
    try {
      let { data } = await axios.get("http://localhost:3001/blog");
      console.log(data);
      setBlogPosts(data.data);
    } catch (e) {
      console.log(e);
    }
  }, []);

  const onButtonClick = () => {
    setFormHidden(() => !formHidden);
  };

  console.log(blogPosts);
  return (
    <>
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
        {blogPosts.length > 0 ? (
          blogPosts.map((post) => {
            return <h2>{post.title}</h2>;
          })
        ) : (
          <h2>no posts</h2>
        )}
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
