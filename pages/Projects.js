import Head from 'next/head'
import styles from '../components/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Layout from "../components/layout"


export default function Projects() {
    return (
      <>
        <Layout>
        <article>
            <h1 className={utilStyles.heading2Xl}>Projects</h1>

            <div style={{fontSize: "1.5rem",lineHeight: "1.6"}}> Here is an overview of the projects I have done! </div>

        </article>
        </Layout>
      </>
    )

}
