import React from 'react'
import Link from 'next/link'

export default function Button({ 
  href, 
  children, 
  className = 'btn', 
  id = '',
}) {
  return (
    <>
      <Link href={href}>
        <a id={id} className={className}>
          {children}
        </a>
      </Link>
      <style jsx>{`
        .btn {
          display: inline-block;
          font-size: 1.375rem;
          font-weight: 400;
          cursor: pointer;
          border-radius: 1000px;
          background: #4b6cc1;
          padding: 22px 32px;
          transition: all ease .3s;
        }
        .btn:not(.btn--disabled):hover {
          transform: scale(1.075);
          box-shadow: inset 0 0 0 2px #4b6cc1;
          background: none;
          color: #4b6cc1;
        }
      `}</style>
    </>
  )
}
