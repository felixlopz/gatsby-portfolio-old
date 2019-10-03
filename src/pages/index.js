import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allContentfulProjectModel.edges

    return (
      <Layout location={this.props.location} title={"siteTitle"}>

        <SEO title="Felix Lopez" />

        { posts.map(({ node }) => {
          const title = node.title || node.slug
          return (
            <article key={node.slug}>
              <header>
                <h3>
                  <Link to={node.slug}>
                    {title}
                  </Link>
                </h3>
              </header>
              <section>
               <p>{node.description}</p>
              </section>
            </article>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulProjectModel{
      edges{
        node{
          title
          description
          slug
          id
        }
      }
    }
  }
`
