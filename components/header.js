import React, { useState } from 'react'
import SiteLogo from './siteLogo'
import NavMenu from './navMenu'

export default function Header() {
  const [loaded, setLoaded] = useState(false);
  setTimeout(() => {
    setLoaded(true)
  }, 300);
  return (
    <header className="site-header">
      <div className={`site-header__inner anim anim-down anim-fade ${loaded ? 'loaded' : ''}`}>
        <SiteLogo />
        <NavMenu />
      </div>
      <style jsx>{`
        .site-header {
          width: 100%;
          background-color: #191a1d;
          z-index: 800;
        }
        .site-header__inner {
          padding: 40px 0;
          border-bottom: 2px solid rgba(255,255,255,0.1);
          display: flex;
          align-content: center;
          max-width: 1430px;
          width: 92%;
          margin-right: auto;
          margin-left: auto;
        }
      `}</style>
    </header>
  )
}
