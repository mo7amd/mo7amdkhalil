import React from 'react'
import Link from 'next/link'

export default function SiteLogo() {
  return (
    <div className="site-logo">
      <Link href="/">
        <a>
          Mo Khalil
        </a>
      </Link>
      <style jsx>{`
        .site-logo {
          flex-shrink: 0;
        }
        .site-logo a {
          color: #fff;
          transition: all ease 0.3s;
          font-size: 1.75rem;
          display: block;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1.25px;
        }
        .site-logo a::after {
          width: 100%;
          max-width: 30%;
          height: 6px;
          display: block;
          content: '';
          border-radius: 1000px;
          background: #4b6cc1;
          transition: max-width ease .3s;
          margin-top: 12px;
        }
        .site-logo a:hover::after {
          max-width: 15%;
        }
      `}</style>
    </div>
  )
}
