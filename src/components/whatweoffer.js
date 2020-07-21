import React from "react"
import WhatWeOfferStyles from "./whatweoffer.module.scss"

const WhatWeOffer = () => {
  return (
    <>
      <h2>What We Offer</h2>
      <div className={WhatWeOfferStyles.row}>
        <div className={WhatWeOfferStyles.offer}>
          <div className={WhatWeOfferStyles.opacity}>
            <a href="/" className={WhatWeOfferStyles.button}>
              Mentoring
            </a>
          </div>
        </div>
        <div className={WhatWeOfferStyles.offer}>
          <div className={WhatWeOfferStyles.opacity}>
            <a href="/" className={WhatWeOfferStyles.button}>
              Classes
            </a>
          </div>
        </div>
        <div className={WhatWeOfferStyles.offer}>
          <div className={WhatWeOfferStyles.opacity}>
            <a href="/" className={WhatWeOfferStyles.button}>
              Workshops
            </a>
          </div>
        </div>
        <div className={WhatWeOfferStyles.offer}>
          <div className={WhatWeOfferStyles.opacity}>
            <a href="/" className={WhatWeOfferStyles.button}>
              Events
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhatWeOffer
