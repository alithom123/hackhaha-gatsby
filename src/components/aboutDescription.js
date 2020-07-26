import React from "react"
import aboutDescriptionStyles from "./aboutDescription.module.scss"

const AboutDescription = () => {
  return (
    <section className={aboutDescriptionStyles.aboutSection}>
      <div className={aboutDescriptionStyles.mainDiv}>
        <p className={aboutDescriptionStyles.description}>
          Getting started in stand-up comedy is extremely intimidating and there
          aren't a lot of options for people who've always wanted to try it.
          <br />
          <br />
          There are classes for almost everything except standup comedy. We
          offer stand-up comedy classes and mentoring that will make it easier
          for people to take the plunge. We aim to teach the basic tools of
          stand-up comedy writing. There are simple hacks to comedy writing that
          you might never notice until we point them out.
          <br />
          <br />
          Our classes are designed for newcomers to stand-up but also work
          really well for comedians who want to work out new material and skip
          what can be an exhausting open mic scene.
          <br />
          <br />
          If you have any questions about the next classes or getting some
          mentoring please fill out the contact formwith your question.
        </p>
      </div>
    </section>
  )
}

export default AboutDescription
