import Head from "next/head";
import styles from "../../components/layout.module.css";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import Layout from "../../components/layout";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";

export default function blog(props) {
  let [formHidden, setFormHidden] = useState(true);
  let [blogPosts, setBlogPosts] = useState([]);

  const onButtonClick = () => {
    setFormHidden(() => !formHidden);
  };

  const handleSubmit = (e) => {
    alert("Are you sure you want to post this?");
    const form = e.currentTarget;
    e.preventDefault();
  };

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
        <h3>No Posts yet</h3>
        {/* <Button
          style={{ marginTop: "2rem", fontSize: "1.3rem" }}
          onClick={onButtonClick}
        >
          Make Post
        </Button> */}
      </div>

      {formHidden ? (
        <div></div>
      ) : (
        <Form
          style={{
            margin: "2rem",
            fontSize: "2rem",
          }}
          onSubmit={handleSubmit}
        >
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Example: 'New Post'" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Post Content</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Make Post
          </Button>
        </Form>
      )}
    </>
  );
}
