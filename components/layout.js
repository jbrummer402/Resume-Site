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
        <h1 style={{textAlign:"center"}} className={utilStyles.heading2Xl}>{name}</h1>

        <div style={{lineHeight: "1.0px"}} className={styles.container}>
            <ul>
                <li><Link href="/"><a>Home</a></Link></li>
                <li><Link href="/posts/about"><a>About</a></Link></li>
                <li>
                    <div className={styles.dropdown}>
                        <button className={styles.dropbtn}>
                            Projects
                        </button>
                        <div className={styles.dropdownContent}>
                            <Link href="/Minesweeper"><a>Minesweeper</a></Link>
                        </div>
                    </div>
                </li>
                <li><Link href="/blog"><a>Blog</a></Link></li>
                <li><Link href="/posts/contact"><a>Contact</a></Link></li>
                <li><Link href="/comment"><a>Submit a comment</a></Link></li>

            </ul>

        <header className={styles.header}>
            {home ? (
            <>
                <img
                src="/images/Jack_Brummer (1).jpg"
                className={`${styles.headerHomeImage}`}
                alt={name}
                />
                <section style={{paddingLeft: "15px"}} className={utilStyles.headingMd}>
                    <h1>Welcome to my website</h1>
                    <p>
                    Here you'll find some of my favorite projects that I have worked on over the years.
                    I hope you enjoy it!
                    </p>
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
