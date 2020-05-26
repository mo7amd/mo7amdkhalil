import React from 'react'
import SiteCTA from '../../components/siteCTA'
import BlogWidget from '../../components/blogWidget'
import Section from '../../components/section'
import SiteBanner from '../../components/siteBanner'

export default function AboutPage() {
  return (
    <>
      <SiteBanner
        title="About Me"
        subTitle="Find out who I am, where I'm from and what I'm all about."
      />
      <Section>
      </Section>
      <section className="section section--small spacing-huge-top">
        <div className="content-styles">
          <h2 id="who-i-am">Who I Am</h2>
          <p className="txt-large">
            My name's Mohamed. I'm a software engineer based in Alexandria, EG.
          </p>
          <p>
            During the day I’m Senior Software Engineer at Canadian Based company.
            During the evenings I spend my time working on freelance projects and building my own products.
          </p>
          <hr />
          <h2 id="why-work-with-me">Why Work With Me</h2>
          <p>There’s nothing I enjoy more than building and developing good web apps for nice people. It really is that simple.</p>
          <p>I’ve spent many years trying to perfect what I do and while I’ll never be perfect, I do my best to come close.</p>
          <p>If you’ve got a project you’d like to work on with me just <a href="/contact">get in touch</a> and we can get to work!</p>
        </div>
      </section>
      <BlogWidget />
      <SiteCTA />
    </>
  )
}
