import Layout from '../../components/layout'
import { getAllDescriptionIds, getDescriptionData } from '../../lib/descriptions'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export default function ProjectDescription({ descData, children }) {
    return (
        <Layout>
            <Head>
                <title>{descData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingLg} style={{padding: "2rem 0rem 0rem 2rem"}}>{descData.title}</h1>
                <div className={utilStyles.lightText}>

                
                </div>
                <div style={{fontSize: "1.5rem",lineHeight: "1.6", padding: "2rem"}} dangerouslySetInnerHTML={{ __html: descData.contentHtml }} />
            </article>
            <main>{children}</main>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllDescriptionIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const descData = await getDescriptionData(params.id)
    return {
        props: {
            descData
        }
    }
}
