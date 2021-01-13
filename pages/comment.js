import Head from 'next/head'
import styles from '../components/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Layout from "../components/layout"

export default function Comment (){
    return (
        <>
        <Layout>

            <header className={styles.headingMd}/> <h1>Submit a comment or suggestion here! </h1>

        </Layout>
        </>
    )
}
