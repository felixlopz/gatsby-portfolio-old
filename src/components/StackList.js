import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const StackListWrapper = styled.ul`
	max-width: 500px;
	margin:0 auto;
	margin-top: 2rem;
	display: flex;
	flex-flow: column wrap;
	align-items: center;
	list-style: none;
	height: 320px;
`

const StackIcon = styled.li`
	width: 70px;	
	height: 70px;	
	margin-bottom: 10px;
`

const StackList = (props) => {


	const {allFile: icons }= useStaticQuery(graphql`
		query{
		  allFile(filter:{ absolutePath:{regex: "/icons/"}}){
		    edges{
		      node{
		        childImageSharp{
		          fluid{
		            ...GatsbyImageSharpFluid
		          }
		        }
		      }
		    }
		  }
		}
	`)

  return (
   <StackListWrapper>
   	{
   		icons.edges.map(({node}, i) => (
   			<StackIcon key={i}>
   				<Img fluid={node.childImageSharp.fluid}/>
   			</StackIcon>
   		))   			
   	}
   </StackListWrapper>
  )
}

export default StackList;
