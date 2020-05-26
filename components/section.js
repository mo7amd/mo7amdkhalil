import React from 'react'

export default function Section({ sectionClass, innerClass = '', children }) {
  return (
    <section className={sectionClass}>
      <div className={`section__inner ${innerClass}`}>
        {children}
      </div>
      <style jsx>{`
        .section__inner {
          width: 92%;
          margin-right: auto;
          margin-left: auto;
          max-width: 1200px;
        }
        .site-cta {
          padding-top: 100px;
          background-color: #191a1d;
          clip-path: polygon(0 0, 100% 100px, 100% 100%, 0 100%);
        }
        .site-banner {
          border-bottom: none;
          background-color: #191a1d;
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 100px));
        }
        @media screen and (max-width: 1920px) {
          .section__inner {
            max-width: 1200px;
          }
        }
        @media screen and (max-width: 1280px) and (min-width: 671px) {
          .section__inner {
            padding: 100px 0px;
          }
        }
        @media screen and (max-width: 670px) {
          .section__inner {
            padding: 50px 0;
          }
        }
      `}</style>
    </section>
  )
}
