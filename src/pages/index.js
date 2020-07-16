import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Standup Institute</h1>
      <h2>We Teach Funny</h2>
      <p>
        Trying standup doesn't have to be terrifying. Contact us to learn how we
        do it. Zero pressure atmosphere. <Link to="/contact">Contact us.</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
