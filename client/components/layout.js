import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const axios = require("axios");

import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const name = "Jack Brummer";
export const siteTitle = "Jack Brummer.com";

export default function Layout({ children, home, siteTitle }) {
  
  return (
    <>
      <div style={{ 
        paddingBottom: "5rem",
        }}>
        <Navbar
          style={{
            
            position: "fixed",
            
            width: "100%",
            justifyContent: "space-between",
            fontSize: "1.7rem",
            background: "lightgrey",
            filter: "brightness(95%)",
            zIndex: "1",
          }}
        >
          <Navbar.Brand
            style={{
              justifySelf: "start",
              fontSize: "2rem",
              padding: ".5rem",
            }}
            href="/"
          >
            JackBrummer.com
          </Navbar.Brand>

          <Nav style={{ color: "black", font: "sans-serif" }}>
            {/* <Nav.Link style={{ padding: "1.5rem" }} href="/posts/about">
              About
            </Nav.Link> */}

            <Nav.Link style={{ padding: "1.5rem" }} href="/blog/">
              Blog
            </Nav.Link>
            <Nav.Link style={{ padding: "1.5rem" }}>
              Freelance Services
            </Nav.Link>
            <Nav.Link style={{ padding: "1.5rem" }} href="/posts/contact">
              Contact
            </Nav.Link>

            <Nav.Link
              style={{ padding: "1.5rem" }}
              href={"/downloadables/JackBrummer_Resume_2021.pdf"}
              download
            >
              Resume
            </Nav.Link>
            <Nav.Link
              style={{ padding: "1.5rem" }}
            >
              Login/Signup
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
      <div style={{
        }}>
        <div>
          <header className={styles.header}>
            <>
              <title>{siteTitle}</title>
              <main>{children}</main>
            </>
          </header>
        </div>
      </div>
    </>
  );
}
