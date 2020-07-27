import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import Cover from "../components/cover"
import HackIntoFunny from "../components/hackintofunny"
import Form from "../components/form"
import WhatWeOffer from "../components/whatweoffer"
import WhatPeopleAreSaying from "../components/whatpeoplearesaying"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <Cover />
      <HackIntoFunny />
      {/* <Form /> */}
      <WhatWeOffer />
      <WhatPeopleAreSaying />
    </Layout>
  )
}

export default IndexPage
