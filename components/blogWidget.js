import React from 'react'
import SectionTitle from './sectionTitle'
import Button from './button'
import Section from './section'

export default function BlogWidget() {
  return (
    <Section>
        <SectionTitle title="from my blog" />
        <div className="grid">
          <p>No posts Yet</p>
        </div>
        <div className="blog-load-more">
          <Button href="/blog">
            View More Posts
          </Button>
        </div>
        <style jsx>{`
          .blog-load-more {
            text-align: center;
            padding-top: 80px;
          }
        `}</style>
    </Section>
  )
}
