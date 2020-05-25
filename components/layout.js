import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children }) {
  const Year = new Date().getFullYear();
  return (
    <>
      <Head>
        <title>Mohamed Khalil | Sr. Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Link href="/">
          <a>
            Mohamed Khalil
          </a>
        </Link>
        <nav>
          <ul>
            <li>
              <Link href="/about">
                <a>
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <a>
                  Projects
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>
                  Contact
                </a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a>
                  Blog
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
       {children}
      </main>
      <footer>
  <p>Handcrafted by me &copy; {Year}</p>
      </footer>
    </>
  )
}
