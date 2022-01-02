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

import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const name = "Jack Brummer";
export const siteTitle = "Jack Brummer.com";

export default function Layout({ children, home, siteTitle }) {
  return (
    <>
      <div>
        <Navbar
          style={{
            position: "fixed",
            width: "100%",
            justifyContent: "space-between",
            fontSize: "1.7rem",
            background: "white",
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

          <Nav style={{ font: "sans-serif" }}>
            {/* <Nav.Link style={{ padding: "1.5rem" }} href="/posts/about">
              About
            </Nav.Link> */}

            <Nav.Link style={{ padding: "1.5rem" }} href="/blog/">
              Blog
            </Nav.Link>
            <Nav.Link style={{ padding: "1.5rem" }} href="/posts/contact">
              Contact
            </Nav.Link>
            <Nav.Link style={{ padding: "1.5rem" }}>Resume</Nav.Link>
          </Nav>
        </Navbar>
      </div>
      <div>
        <div>
          <header className={styles.header}>
            <>
              <title>{siteTitle}</title>
              <main>{children}</main>
              <ul
                style={{
                  position: "fixed",
                  right: "0",
                  height: "11.3rem",
                  margin: "10rem 2rem 0 1rem",
                  padding: ".4rem 2rem 0 2rem",
                  backgroundColor: "rgba(0,0,0,0)",
                  borderLeft: "1px solid black",
                }}
              >
                <li style={{ display: "inline-flex" }}>
                  <ScrollLink
                    smooth={true}
                    style={{
                      fontSize: "1.5rem",
                      padding: "0",
                    }}
                    to="AboutMeSection"
                  >
                    About me
                  </ScrollLink>
                </li>
                <br />
                <li style={{ display: "inline-flex" }}>
                  <ScrollLink
                    smooth={true}
                    style={{ fontSize: "1.5rem", padding: ".5rem 0 0 0" }}
                    to="/#InterestSection"
                  >
                    Interests and Projects
                  </ScrollLink>
                </li>
                <br />
                <li style={{ display: "inline-flex" }}>
                  <ScrollLink
                    smooth={true}
                    style={{ fontSize: "1.5rem", padding: ".5rem 0 0 0" }}
                    to="/#EducationSection"
                  >
                    Education
                  </ScrollLink>
                </li>
                <br />
                <li style={{ display: "inline-flex" }}>
                  <ScrollLink
                    smooth={true}
                    style={{ fontSize: "1.5rem", padding: ".5rem 0 0 0" }}
                    to="ResearchSection"
                  >
                    Research
                  </ScrollLink>
                </li>
              </ul>
            </>
          </header>
        </div>
      </div>
    </>
  );
}
