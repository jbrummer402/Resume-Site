import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

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
      <div>
        <Navbar style={{ background: "transparent" }}>
          <Navbar.Brand
            style={{ fontSize: "2.4rem", padding: "1rem" }}
            href="/"
          >
            JackBrummer.com
          </Navbar.Brand>
          <Nav style={{ fontSize: "2.3rem" }} className="me-auto">
            <Nav.Link style={{ padding: "2rem" }} href="/">
              Home
            </Nav.Link>
            <Nav.Link style={{ padding: "2rem" }} href="/posts/about">
              About
            </Nav.Link>
            <Nav.Link style={{ padding: "2rem" }} href="/Resume">
              Resume and Skills
            </Nav.Link>
            <Nav.Link style={{ padding: "2rem" }} href="/blog/">
              Blog
            </Nav.Link>
            <Nav.Link style={{ padding: "2rem" }} href="/posts/contact">
              {" "}
              Contact{" "}
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
      <div>
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
