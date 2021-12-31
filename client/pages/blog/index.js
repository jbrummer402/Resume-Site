import Head from "next/head";
import styles from "../../components/layout.module.css";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import Layout from "../../components/layout";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";

export default function blog(props) {
  let [formHidden, setFormHidden] = useState(true);

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
      <div>
        <h1 className={utilStyles.headingLg}> Blog </h1>
        <p
          style={{
            fontSize: "1.5rem",
            lineHeight: "1.6",
            paddingLeft: "2rem",
          }}
        >
          I decided to write blog on this site for numerous topics. These can
          include current events or opinion articles on current events in
          computer science. Feel free to share anything on here with friends
        </p>

        <li></li>
      </div>

      <div
        style={{
          lineHeight: "1.6",
          margin: "2rem",
        }}
      >
        <h2>Blog posts</h2>
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
