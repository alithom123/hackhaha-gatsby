const path = require("path")
const colors = require("colors")

/* module.exports.onCreateNode = ({ node, actions }) => {
  const { createNode, createNodeField } = actions
  // Transform the new node here and create a new node or
  // create a new node field.
  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")
    // console.log("@@\u001b[" + 31 + "m" + slug + "\u001b[0m".bgCyan)
    console.log(slug.bgCyan)
    createNodeField({
      node: node,
      name: "slug",
      value: slug,
    })
  }
} */

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")
  console.log(`blogTemplate`.bgCyan, blogTemplate.bgYellow)
  /*   const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `) */

  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  console.log(`res`, res)

  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
