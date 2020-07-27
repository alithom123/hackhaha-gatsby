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
        Online standup classes, workshops and mentoring!
        <br />
        <br />
        Learn the hacks to getting laughs.
      </h3>
      <Link to="/getstarted" className={coverStyles.button}>
        Get Started
      </Link>
    </div>
  )
}

export default Cover
