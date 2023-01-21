import { useRouter } from 'next/router';
import DefaultErrorPage from 'next/error';
import Head from 'next/head';
import React from 'react';

export async function getStaticProps({ params }) {
  return {
    props: {}, // will be passed to the page component as props
  }
  
}

export async function getStaticPaths() {
  return {
    paths: [{ }],
    fallback: false, // can also be true or 'blocking'
  }
}

export default function Page({ page }) {
  const router = useRouter();
  
  return (
    <>
      
    </>
  );
}


