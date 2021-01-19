import Head from 'next/head'
import styles from '../components/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Layout from "../components/layout"


export default function Blog () {
    return (
        <Layout>
            <div className={utilStyles.headingMd}>
                <h1> Blog </h1>
            </div>
        </Layout>
    )
}
