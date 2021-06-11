import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
  } from "react-router-dom";

const name = 'Jack Brummer'
export const siteTitle = "Jack Brummer.com"

export default function Layout({ children, home, siteTitle }) {
    return (
        <>
        
        <div>
          <Navbar bg="dark"
                  variant="dark"
                  sticky="top"
                  collapseOnSelect>
            <Navbar.Brand style={{fontSize: "2.4rem", padding: "1rem"}} href="#home">JackBrummer.com</Navbar.Brand>
              <Nav style={{fontSize: "2.3rem", }}  className="mr-auto">
                <Nav.Link style={{padding: "2rem"}} href="/">Home</Nav.Link>
                <Nav.Link style={{padding: "2rem"}} href="/posts/about">About</Nav.Link>
                <Nav.Link style={{padding: "2rem"}} href="/Projects">Projects</Nav.Link>
                <Nav.Link style={{padding: "2rem"}} href="/Blog">Blog</Nav.Link>
                <Nav.Link style={{padding: "2rem"}} href="/posts/contact"> Contact </Nav.Link>
              </Nav>
          </Navbar>
        </div>
        <div>

       
        <div className={styles.container}>
            <header className={styles.header}>
                {home ? (
                <>
                    <title>Home</title>
                    <section style={{padding: "2rem 2rem"}} className={utilStyles.headingLg}>
                    <img
                    src="/images/Jack_Brummer (1).jpg"
                    className={`${styles.headerHomeImage}`}
                    alt={name} />
                        <h1>Welcome to my website!</h1>
                        <p>
                        Here you'll find some of my favorite projects that I have worked on over the years.
                        </p>
                        <p>I made this site completely on my own using React and Next.js for the front end.
                            I followed the next js tutorial here as a reference and then added my own content.</p>
                        <p>I have yet to finish the backend for it, but be on the lookout</p>
                        <p>
                            The source code can be found on my github
                            <Link href="https://www.github.com/jbrummer402/Resume-site.git"><a> here</a></Link>
                        </p>
                        <p /> Take a look around the site, I hope you enjoy it!
                        <p>This site may change in appearance or function as time goes on as I learn new things, so be prepared</p>
                    </section>
                    <section style={{paddingLeft: "15px"}} className={utilStyles.headingLg}>

                    </section>
                </>
                ) : (
                <>
                    <title>{siteTitle}</title>
                    <main>{children}</main>
                </>
                )}
            </header>
        </div>
    </div>
    </>
    )
}
