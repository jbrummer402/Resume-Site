import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/utils.module.css'
import Layout, { siteTitle } from "../components/layout"
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

var applet = {
  __html:


   <applet
    width="540"
    height="480"
    code="Minesweeper.class">
    </applet>
  };


export default function Minesweeper() {
    return (

      <>
        <Layout>
            <article>
                <h1 className={utilStyles.headingMd}>Minesweeper</h1>
                <div dangerouslySetInnerHTML={applet}></div>
            </article>

        </Layout>
      </>
    )

}
