import React from "react"
import WhatPeopleAreSayingStyles from "./whatpeoplearesaying.module.scss"

const WhatPeopleAreSaying = () => {
  return (
    <section>
      <>
        <h2>What People Are Saying</h2>
        <div className={WhatPeopleAreSayingStyles.row}>
          <div className={WhatPeopleAreSayingStyles.review}>
            <p className={WhatPeopleAreSayingStyles.quote}>
              “They helped me turn my funny ideas into actual jokes.”
            </p>
            <p className={WhatPeopleAreSayingStyles.name}>— Norma K.</p>
            <p className={WhatPeopleAreSayingStyles.city}>RoundRock, TX</p>
          </div>

          <div className={WhatPeopleAreSayingStyles.review}>
            <p className={WhatPeopleAreSayingStyles.quote}>
              “Brutally honest and hilarious!”
            </p>
            <p className={WhatPeopleAreSayingStyles.name}>— Kevin S.</p>
            <p className={WhatPeopleAreSayingStyles.city}>Austin, TX</p>
          </div>

          <div className={WhatPeopleAreSayingStyles.review}>
            <p className={WhatPeopleAreSayingStyles.quote}>
              “Now I get on stage without feeling like I need to puke.”
            </p>
            <p className={WhatPeopleAreSayingStyles.name}>— Jason D.</p>
            <p className={WhatPeopleAreSayingStyles.city}>San Antonio, TX</p>
          </div>

          <div className={WhatPeopleAreSayingStyles.review}>
            <p className={WhatPeopleAreSayingStyles.quote}>
              “Before I had just OK material, but now it kills!”
            </p>
            <p className={WhatPeopleAreSayingStyles.name}>— Kim G.</p>
            <p className={WhatPeopleAreSayingStyles.city}>Los Angeles, CA</p>
          </div>
        </div>
      </>
    </section>
  )
}

export default WhatPeopleAreSaying
