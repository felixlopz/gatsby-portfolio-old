const path = require(`path`)


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const projectPost = path.resolve(`./src/templates/project-post.js`)
  const result = await graphql(
    `
      {
       allContentfulProjectModel{
          edges{
            node{
              title
              slug
              id
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allContentfulProjectModel.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.slug,
      component: projectPost,
      context: {
        slug: post.node.slug,
        previous,
        next,
      },
    })
  })
}

