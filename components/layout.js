import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Header from './header';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Mohamed Khalil | Sr. Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
       {children}
      </main>
      <Footer />
    </>
  )
}
