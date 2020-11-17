import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/utils.module.css'
import Layout, { siteTitle } from "../components/layout"
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

function applet() {
  return {__html:
            <applet code="AppletCode/APCS2017Minesweeper/silverlight/games/Minesweeper.class"></applet>
          };
}

export default function Minesweeper() {
    return (

      <>
      <Layout>
      <Head>Minesweeper</Head>
          <div dangerouslySetInnerHTML={applet()}/>
      </Layout>
      </>
    )

}
