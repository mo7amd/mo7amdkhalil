import React, { useState } from 'react'
import Section from './section'
import Button from './button'

export default function SiteBanner({ title, subTitle, contentPosition, figure = false }) {
  const [loaded, setLoaded] = useState(false);
  setTimeout(() => {
    setLoaded(true)
  }, 300);
  return (
    <Section sectionClass="site-banner" innerClass={`grid anim anim-up anim-fade ${loaded ? 'loaded' : ''}`}>
      <div className={`site-banner__content ${contentPosition}`}>
        <h1 className="site-banner__title">
          {title}
        </h1>
        <h2 className="site-banner__subtitle">
          {subTitle}
        </h2>
        {
          figure ? (
            <Button href="/projects">
              My Projects
            </Button>
          ) : null
        }
      </div>
      {
        figure ? (
          <figure className="site-banner__img" >
            <picture>
              <img src="./avatar.png" alt="Mohamed Khalil wearing glasses" width="424" />
            </picture>
          </figure>
        ) : null
      }
      <style jsx>{`
        .site-banner__title {
          color: #fff;
        }
        .site-banner__subtitle {
          color: #ababab;
          font-weight: 300;
          line-height: 140%;
          margin: 35px 0;
        }
        .site-banner__content {
          text-align: center;
          margin-bottom: 30px;
        }
        .site-banner__content.left {
          text-align: left;
        }
        .site-banner__img {
          max-width: 100%;
          width: 424px;
          background-color: #121316;
          flex-shrink: 0;
          padding: 50px;
          margin: auto;
          margin-bottom: 50px;
        }
        .site-banner__img img {
          position: relative;
          margin-bottom: -100px;
          border-radius: 3px;
          box-shadow: 0 5px 30px rgba(0,0,0,0.2);
          width: 100%;
          display: block;
          max-width: 100%;
        }
        @media screen and (min-width: 1280px) {
          .site-banner__content {
            padding-right: 100px;
          }
          .site-banner__subtitle {
            font-size: 2.125rem;
          }
        }
        @media screen and (max-width: 670px) {
          .site-banner__subtitle {
            font-size: 1.375rem;
          }
        }
      `}</style>
    </Section>
  )
}
