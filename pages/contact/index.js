import React from 'react'
import { FaCircle } from 'react-icons/fa'

export default function ContactPage({ status = true }) {
  const statusColor = status ? 'green' : 'red'
  const NotAvailableText = ({ status }) => {
    if (status) return null;
    return (
      <p>But still I would Love to hear from you...</p>
    )
  }
  return (
    <>
      <section>
        <div>
          <div>
            <h1>Contact Me</h1>
            <h2>
              If you’d like to chat about a project please fill in the form below and I’ll get back within 1-2 days.
            </h2>
          </div>
        </div>
      </section>
      <section className="spacing-huge">
        <div className="section section--small spacing-large-bottom">
          <div className="page-cta">
            <div className="content-styles">
              <h2>
                <span className="h4">
                  Status
                </span>
                <br />
                <span className="txt-highlight">
                  Available
                  <FaCircle color={statusColor} />
                </span>
              </h2>
              <NotAvailableText status={status} />
            </div>
          </div>
        </div>

        <div className="section section--small">
          <form className="form js-form-validate" name="contact" method="POST" action="/contact/success" noValidate="novalidate">
            <input type="hidden" name="form-name" value="contact" />
            <div className="hidden">
              <input type="hidden" name="bot-field" />
            </div>
            <div className="form__inner">
              <div className="form__item form__item--half">
                <label className="form__label">
                  Name
                </label>
                <input className="form__field" type="text" name="name" required="" />
              </div>
              <div className="form__item form__item--half">
                <label className="form__label">
                  Email
                </label>
                <input className="form__field" type="email" name="email" required="" />
              </div>
              <div className="form__item form__item--full">
                <label className="form__label">
                  How Can I Help?
                </label>
                <textarea className="form__field" name="message" required=""></textarea>
              </div>
              <div className="form__item form__item--full form__item--action">
                <button>
                  <span className="btn__inner">
                    Send Message
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
