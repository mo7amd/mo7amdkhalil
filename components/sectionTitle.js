import React from 'react'

export default function SectionTitle({ title }) {
  return (
    <div className="spacing-small-bottom">
      <h2 className="section-title">
        {title}
      </h2>
      <style jsx>{`
        .section-title {
          text-transform: uppercase;
          padding-bottom: 15px;
          border-bottom: 4px solid #f6f6f6;
          font-size: 1.5rem;
          font-weight: 500;
          letter-spacing: 1.25px;
          color: rgb(187, 184, 178);
        }
      `}</style>
    </div>
  )
}
