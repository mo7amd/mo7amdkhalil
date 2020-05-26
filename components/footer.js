import React from 'react'

export default function Footer() {
  const Year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p>Handcrafted by me &copy; {Year}</p>
      </div>
      <style jsx>{`
        .site-footer {
          position: absolute;
          bottom: -90px;
          left: 0;
          width: 100%;
          background-color: #101114;
        }
        .site-footer__inner {
          text-align: center;
          padding: 35px 0;
          max-width: 925px;
          width: 92%;
          margin: auto;
        }
        .site-footer p {
          color: #fff;
          font-size: 1.25rem;
        }
      `}</style>
    </footer>
  )
}
