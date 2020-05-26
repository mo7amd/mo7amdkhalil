import React from 'react'
import Link from "next/link"
import { FaEnvelope } from 'react-icons/fa'
import { IoLogoLinkedin } from 'react-icons/io'
import Button from './button'
import Section from './section'

export default function SiteCTA() {
  return (
    <>
    {/* <section className="site-cta">
      <div className="site-cta__inner">
        
      </div>
    </section> */}
    <Section sectionClass="site-cta">
    <div className="grid">
          <div className="grid__col grid__col--8">
            <div className="site-cta__content-wrapper">
              <h2 className="site-cta__title">
                let&apos;s work together
              </h2>
              <p className="site-cta__txt">
                Have a project you'd like to discuss?
              </p>
            </div>
            <Button href="/contact">
              Get in Touch
            </Button>
          </div>
          <div className="grid__col grid__col--4">
            <ul className="icon-list">
              <li className="icon-list__item">
                <span className="icon-list__icon">
                  <FaEnvelope color="#4b6cc1" size={24} />
                </span>
                <a href="mailto:mo7amd.khaled@gmail.com">on email</a>
              </li>
              <li className="icon-list__item">
                <span className="icon-list__icon">
                  <IoLogoLinkedin color="#4b6cc1" size={24} />
                </span>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/muhammad-khalil/">on LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
    </Section>
    <style jsx>{`
      .site-cta__inner {
        width: 92%;
        margin-right: auto;
        margin-left: auto;
      }
      .site-cta__title {
        color: #fff;
        line-height: 115%;
        text-transform: capitalize;
      }
      .site-cta__txt {
        color: rgba(255,255,255,0.5);
        line-height: 160%;
        margin-top: 15px;
        font-size: 1.5rem;
      }
      .site-cta__content-wrapper {
        padding-bottom: 35px;
      }
      .icon-list__item {
        color: rgba(255,255,255,0.5);
        display: flex;
        align-items: center;
      }
      .icon-list__item:not(:last-child) {
        margin-bottom: 30px;
      }
      .icon-list__item a {
        color: rgba(255,255,255,0.5);
        transition: color ease .3s;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 1.25px;
      }
      .icon-list__item a:hover {
        color: #fff;
      }
      .icon-list__icon {
        max-width: 24px;
        max-height: 24px;
        margin-right: 15px;
      }
      @media screen and (max-width: 1920px) {
        .site-cta__inner {
          max-width: 1200px;
        }
      }
      @media screen and (max-width: 1280px) and (min-width: 671px) {
        .site-cta__inner {
          padding: 100px 0px;
        }
      }
      @media screen and (max-width: 670px) {
        .site-cta__inner {
          padding: 50px 0;
        }
        .site-cta__content-wrapper {
          padding-bottom: 25px;
        }
        .icon-list__icon {
          max-width: 20px;
          max-height: 20px;
          margin-right: 10px;
        }
        .icon-list {
          margin-top: 30px;
        }
      }
    `}</style>
    </>
  )
}
