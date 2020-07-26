import React from "react"
import bannerStyles from "./banner.module.scss"

const Banner = ({ title }) => {
  return (
    <section>
      <div className={bannerStyles.mainDiv}>
        <h1 className={bannerStyles.title}>{title}</h1>
      </div>
    </section>
  )
}

export default Banner
