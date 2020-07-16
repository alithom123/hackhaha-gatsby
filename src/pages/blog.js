import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import blogStyles from "./blog.module.scss"
import Head from "../components/head"

const BlogPage = () => {
  /*   const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            html
            frontmatter {
              title
              date
            }
            html
            excerpt
            fields {
              slug
            }
          }
        }
      }
    }
  `) */

  const contentfulData = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: published, order: DESC }) {
        edges {
          node {
            title
            slug
            published(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  // console.log(`blog data`, data)
  console.log(`contentful blog data`, contentfulData)

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {/* {data.allMarkdownRemark.edges.map(eachEdge => { */}
        {contentfulData.allContentfulBlogPost.edges.map(eachEdge => {
          return (
            <li className={blogStyles.post}>
              {/* <Link to={`/blog/${eachEdge.node.fields.slug}`}>
                <h2>{eachEdge.node.frontmatter.title}</h2>
                <p>{eachEdge.node.frontmatter.date}</p>
              </Link> */}
              <Link to={`/blog/${eachEdge.node.slug}`}>
                <h2>{eachEdge.node.title}</h2>
                <p>{eachEdge.node.published}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
