import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"

// sections
import Hero from '../sections/Hero'
import Portfolio from '../sections/Portfolio'
import About from '../sections/About'
import Footer from '../sections/Footer'


const ViewHeightDiv = styled.div`
  height: 100vh;
`

const PortfolioIndex = ({data, ...props}) =>{

  const siteTitle = data.site.siteMetadata.title
  const projects = data.allContentfulProjectModel.edges.map(({node}) => node)

  // we link with node.slug 

  return (
    <Layout location={props.location} title={siteTitle}>
      <Hero/>
      <ViewHeightDiv id="home"/>
      <Portfolio projects={projects}/>
      <About/>
      <Footer/>
    </Layout>
  )
}

export default PortfolioIndex

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
          website
          source
          id
          image{
            fluid{
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
