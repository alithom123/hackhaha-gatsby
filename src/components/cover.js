import React from "react"
import { Link } from "gatsby"
import coverStyles from "./cover.module.scss"

const Cover = () => {
  return (
    <div className={coverStyles.introSection}>
      <h1 className={coverStyles.hiddenTitle}>Learn Standup Comedy</h1>
      <h2 className={coverStyles.title1}>DON’T BE A HACK.</h2>
      <h2 className={coverStyles.title2}>WE TEACH FUNNY.</h2>
      <h3 className={coverStyles.subtitle}>
        Transform into a stand up master with classes, workshops, mentoring, and
        more in Austin, TX.
      </h3>
      <Link to="/" className={coverStyles.button}>
        Get Started
      </Link>
    </div>
  )
}

export default Cover
