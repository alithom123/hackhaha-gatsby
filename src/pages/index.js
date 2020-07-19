import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import Cover from "../components/cover"
import HackIntoFunny from "../components/hackintofunny"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <Cover />
      <HackIntoFunny />
    </Layout>
  )
}

export default IndexPage
