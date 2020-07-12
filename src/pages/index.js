import React from "react"
import { Link } from "gatsby"
import Header from "../components/Header"
import Footer from "../components/Footer"

const IndexPage = () => {
  return (
    <div>
      <Header />
      <h1>Standup Institute</h1>
      <h2>We Teach Funny</h2>
      <p>
        Trying standup doesn't have to be terrifying. Contact us to learn how we
        do it. Zero pressure atmosphere. <Link to="/contact">Contact us.</Link>
      </p>
      <Footer />
    </div>
  )
}

export default IndexPage
