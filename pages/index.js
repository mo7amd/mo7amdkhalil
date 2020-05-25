import Link from "next/link";
import { FaEnvelope } from 'react-icons/fa'
import { IoLogoLinkedin } from 'react-icons/io'

export default function Home() {
  return (
    <>
      <section id="intro">
        <div>
          <h1>Hey, I&apos;m khalil.</h1>
          <h2>
            Software Engineer from Alexandria, EG.
            I create Beautiful looking and high performance web apps to help businesses do better online.
          </h2>
          <Link href="/projects">
            <a>
              My Projects
            </a>
          </Link>
        </div>
        <figure>
          <picture>
            <img src="./avatar.png" alt="Mohamed Khalil wearing glasses" width="424" />
          </picture>
        </figure>
      </section>
      <section>
        <h2>
          From my Blog
        </h2>
        <div>
          <p>No posts Yet</p>
        </div>
      </section>
      <section>
        <div>
          <h2>
            let&apos;s work together
          </h2>
          <p>Have a project you'd like to discuss?</p>
            <Link href="/contact">
              <a className="btn btn--large btn--hover-light">
                Get in Touch
              </a>
            </Link>
        </div>
        <div>
          <ul>
            <li>
              <FaEnvelope color="#4b6cc1" />
              <a href="mailto:mo7amd.khaled@gmail.com">mo7amd.khaled@gmail.com</a>
            </li>
            <li>
              <IoLogoLinkedin color="#4b6cc1"/>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/muhammad-khalil/">on LinkedIn</a>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <h2>
          Featured Project
        </h2>
      </section>
    </>
  )
}
