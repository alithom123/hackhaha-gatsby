import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import headerStyles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          title
        }
      }
    }
  `)

  return (
    <header className={headerStyles.header}>
      <nav className={headerStyles.mainNav}>
        <ul className={headerStyles.navList}>
          <li>
            <Link
              to="/"
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/getstarted"
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
            >
              Start
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              header
            >
              Blog
            </Link>
          </li>
          {/* <li>
            <Link
              to="/contact"
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
            >
              Contact
            </Link>
          </li> */}
        </ul>
      </nav>
      <h1 className={headerStyles.titleh1}>
        <Link to="/" className={headerStyles.title}>
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <Link className={headerStyles.signIn} to="/sign-in"></Link>
    </header>
  )
}

export default Header
