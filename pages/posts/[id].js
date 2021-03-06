import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export default function Post({ postData, children }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingLg} style={{padding: "2rem 0rem 0rem 2rem"}}>{postData.title}</h1>
                <div className={utilStyles.lightText}>

                { /* <Date dateString={postData.date} /> */}
                </div>
                <div style={{fontSize: "1.5rem",lineHeight: "1.6", padding: "2rem"}} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
            <main>{children}</main>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}
