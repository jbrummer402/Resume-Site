import Head from 'next/head'
import styles from '../components/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Layout from "../components/layout"


export default function Blog () {
    return (
        <Layout siteTitle={'Blog'}>
            <div >
                <h1 className={utilStyles.headingLg}> Blog </h1>
                <p style={{fontSize: "1.5rem",lineHeight: "1.6", paddingLeft: "2rem"}}>I decided to write blog on this site for numerous topics.
                These can include current events or opinion articles on current events in computer science.
                Feel free to share anything on here with friends</p>
            </div>
        </Layout>
    )
}
