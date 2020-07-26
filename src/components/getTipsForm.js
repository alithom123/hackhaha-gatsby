import React from "react"
import formStyles from "./form.module.scss"

const GetTipsForm = () => {
  return (
    <div className={formStyles.formBox}>
      <h2>Subscribe to Weekly Stand-up Comedy Writing Tips</h2>
      <form
        name="subscribe-tips"
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
        <button class="button">Subscribe</button>
        <p>* Required</p>
      </form>
    </div>
  )
}

export default GetTipsForm
