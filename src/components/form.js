import React from "react"

const Form = () => {
  return (
    <div>
      <h2>Get in Touch</h2>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input name="name" placeholder="Your Name" type="text" />
        <input name="email" placeholder="Email" type="text" />
        <textarea
          name="message"
          placeholder="Let us know if you have any questions."
          type="text"
          rows="5"
        />
        <button>Send</button>
      </form>
    </div>
  )
}

export default Form
