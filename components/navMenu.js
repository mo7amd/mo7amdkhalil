import React, { useState } from 'react'
import Link from 'next/link'

export default function NavMenu() {
  const [loaded, setLoaded] = useState(false);
  setTimeout(() => {
    setLoaded(true)
  }, 300);
  return (
    <div className="site-menu">
      <nav>
          <ul className="site-menu__inner">
            <li className="site-menu__item">
              <Link href="/about">
                <a>
                  About
                </a>
              </Link>
            </li>
            <li className="site-menu__item">
              <Link href="/projects">
                <a>
                  Projects
                </a>
              </Link>
            </li>
            <li className="site-menu__item">
              <Link href="/contact">
                <a>
                  Contact
                </a>
              </Link>
            </li>
            <li className="site-menu__item">
              <Link href="/blog">
                <a>
                  Blog
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <style jsx>{`
          .site-menu {
            margin-left: auto;
          }
          .site-menu__inner {
            display: flex;
          }
          .site-menu__item {
            margin-right: 50px;
            font-size: 1.375rem;
          }
          .site-menu__item a {
            color: #ababab;
            transition: color ease 0.3s;
            position: relative;
            display: block;
          }
          .site-menu__item a:hover {
            color: #fff;
          }
          .site-menu__item a:before {
            transform: translateX(-50%);
            width: 20%;
            height: 6px;
            position: absolute;
            bottom: -20px;
            left: 50%;
            opacity: 0;
            pointer-events: none;
            content: '';
            border-radius: 6px;
            background: #4b6cc1;
            transition: all ease .3s;
          }
          .site-menu__item a:hover:before {
            opacity: 1;
            width: 70%;
          }
        `}</style>
    </div>
  )
}
