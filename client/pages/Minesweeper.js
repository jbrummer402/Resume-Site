import Head from 'next/head'
import styles from '../components/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Layout from "../components/layout"

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
                <h1 className={utilStyles.headingMd}>Minesweeper</h1>
                <div dangerouslySetInnerHTML={applet}></div>


        </Layout>
      </>
    )

}
