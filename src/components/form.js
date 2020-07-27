import React from "react"
import formStyles from "./form.module.scss"

const Form = () => {
  return (
    <div className={formStyles.formBox}>
      <h2>Get Started</h2>
      <p>We'll send you an email to let you know when the next class begins.</p>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input name="name" placeholder="Your Name" type="text" size="50" />
        <input
          name="email"
          placeholder="* Email"
          type="email"
          size="50"
          required
        />
        <textarea
          name="message"
          placeholder="Let us know if you have any questions."
          type="text"
          cols="50"
          rows="5"
        />
        <button class="button">Send</button>
        <p>* Required</p>
      </form>
    </div>
  )
}

export default Form
