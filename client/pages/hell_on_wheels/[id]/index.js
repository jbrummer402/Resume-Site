import axios from 'axios';
import Image from 'next/image';

export default function blogPost({data}) {
    return (
        <h1>{data.Title}</h1>
    )
}

export async function getServerSideProps({ context }) {
    

    const {data} = await axios.get('https://resume-site-brummer.herokuapp.com/admin/content-manager/collectionType/api::post.post/1')
    if (!data) {
        console.log("okay")
    }
    return {
        props: {data}, 
    }

}