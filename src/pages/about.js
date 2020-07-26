import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import Banner from "../components/banner"
import Form from "../components/form"
import AboutDescription from "../components/aboutDescription"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <Banner title="About" />
      <AboutDescription />
      <Form />
    </Layout>
  )
}

export default AboutPage
