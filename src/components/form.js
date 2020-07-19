import React from "react"

const Form = () => {
  return (
    <div>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input name="name" placeholder="Your Name" type="text" />
        <input name="email" placeholder="Email" type="email" />
        <textarea
          name="message"
          placeholder="Let us know if you have any questions."
          type="text"
          rows="5"
        />
        <input name="name" placeholder="Your Name" type="text" />
      </form>
    </div>
  )
}

export default Form
