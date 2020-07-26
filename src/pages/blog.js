import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import blogStyles from "./blog.module.scss"
import Head from "../components/head"
import GetTipsForm from "../components/getTipsForm"
import Banner from "../components/banner"

const BlogPage = () => {
  const contentfulData = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: published, order: DESC }) {
        edges {
          node {
            title
            slug
            published(formatString: "MMMM Do, YYYY")
            body {
              json
            }
            topImage {
              title
              description
              resize(width: 500, height: 500) {
                src
              }
            }
          }
        }
      }
    }
  `)

  console.log(`contentful blog data`, contentfulData)

  return (
    <Layout>
      <Head title="Blog" />
      <Banner title="Blog" />
      <GetTipsForm />
      <div className={blogStyles.outerDiv}>
        <ol className={blogStyles.posts}>
          {/* {data.allMarkdownRemark.edges.map(eachEdge => { */}
          {contentfulData.allContentfulBlogPost.edges.map(eachEdge => {
            return (
              <li className={blogStyles.postListItem}>
                {/* <Link to={`/blog/${eachEdge.node.fields.slug}`}>
                <h2>{eachEdge.node.frontmatter.title}</h2>
                <p>{eachEdge.node.frontmatter.date}</p>
              </Link> */}
                <Link
                  to={`/blog/${eachEdge.node.slug}`}
                  className={blogStyles.postLink}
                >
                  <h2 className={blogStyles.postTitle}>
                    {eachEdge.node.title}
                  </h2>
                  <p className={blogStyles.publishedText}>
                    {eachEdge.node.published}
                  </p>
                  <img
                    className={blogStyles.blogImg}
                    src={eachEdge.node.topImage.resize.src}
                    alt={eachEdge.node.topImage.description}
                  />
                </Link>
              </li>
            )
          })}
        </ol>
      </div>
    </Layout>
  )
}

export default BlogPage
