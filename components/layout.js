import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, DropdownButton } from 'react-bootstrap';


const name = 'Jack Brummer'
export const siteTitle = 'Resume Site'

export default function Layout({ children, home }) {
    return (
        <>
        <div>
        <ul>
            <li className={styles.siteName}>{name + ".com"}</li>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/posts/about"><a>About</a></Link></li>
            <li>
                <div className={styles.dropdown}>
                    <div className={styles.dropbtn}>
                        <Link href="/Projects"><a>Projects</a></Link>
                    </div>
                    <div className={styles.dropdownContent}>
                        <Link href="/Minesweeper"><a>Minesweeper</a></Link>
                        <Link href="/MazePath"><a>Shortest Maze Path </a></Link>
                    </div>
                </div>

            </li>
            <li><Link href="/Blog"><a>Blog</a></Link></li>
            <li><Link href="/posts/contact"><a>Contact</a></Link></li>
            <li><Link href="/comment"><a>Submit a comment</a></Link></li>
            <li style={{float: "right"}}><Link href="#"><a>Login</a></Link></li>
            <li style={{float: "right"}}><Link href="#"><a>Sign up</a></Link></li>
        </ul>
        <div style={{padding: "0"}} className={styles.container}>
            <header className={styles.header}>
                {home ? (
                <>
                    <section style={{paddingLeft: "15px"}} className={utilStyles.headingLg}>
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
                    <main>{children}</main>
                </>
                )}
            </header>
        </div>
    </div>
    </>
    )
}
