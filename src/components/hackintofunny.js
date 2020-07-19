import React from "react"
import hackIntoFunnyStyles from "./hackintofunny.module.scss"

const HackIntoFunny = () => {
  return (
    <section className={hackIntoFunnyStyles.hifSection}>
      <div className={hackIntoFunnyStyles.firstCol}>
        <h3>Hack into Funny</h3>
        <h2>A resource for learning stand up comedy</h2>
      </div>
      <div>
        <p className="whitespace">
          We are an online resource and local comedy community for motivated
          individuals interested in becoming a stand up comedian or wanting to
          hone in on their craft. We have found that there are limited to no
          options for development as a stand up comedian, especially when first
          starting out. HACK#HAHA has a core group of seasoned local comedians
          to help grow the Austin stand up community by sharing and teaching
          newcomers stand up writing and performing basics through our
          experience and knowledge. Our goal is to create a safe and
          non-competitive space to help creative people share their stories and
          ideas through comedy.
        </p>
      </div>
    </section>
  )
}

export default HackIntoFunny
