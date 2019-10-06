import React from 'react';
import styled from 'styled-components';
import Img from "gatsby-image"

// Components
import  ButtonLink from './ButtonLink';

const Wrapper = styled.div`
	width: 100%;

	&:not(:last-child){
		margin-bottom: 8rem;
	}

 @media ${props => props.theme.mediaQueries.medium}{
    flex: 0 0 45%;
		padding: 8rem 0;

    &:not(:last-child){
			margin-bottom: 0;
		}
  }

`;

const Header = styled.header`
	position: relative;
	width: 100%;
	height: 50px;
	h1{
		position: absolute;
		font-size: 2.4rem;
		font-weight: var(--bold);
		text-transform: capitalize;
		left: 16px;

	  @media ${props => props.theme.mediaQueries.small}{
	    font-size: 2.8rem;
	    left: 20px;
	  }

	  @media ${props => props.theme.mediaQueries.medium}{
	    left: -16px;
	  }
	}
`;

const DescriptionText = styled.p`
	font-size: 1.4rem;
	padding: 0.8em  1em;
	font-weight: var(--light);
	color: var(--color-light);

	@media ${props => props.theme.mediaQueries.small}{
	  font-size: 1.6	rem;
	}

	@media ${props => props.theme.mediaQueries.medium}{
	  padding: 0.8em  0;
	  line-height: 1.2;
  }

`
const Footer = styled.div`
	position: relative;
	width: 100%;
	margin: 0 auto;
	max-width: 400px;
	display: flex;
	justify-content: space-between;
	padding:0 4em;
	margin-top: 1rem;
	
`;

const Image = styled(Img)`
	width: 100%;
	min-height: 200px;
	object-fit: cover;
	object-position: center center;
`

const ProjectItem = ({project}) => {

  return (
    <Wrapper>
  		<Header>
  			<h1>
  				{project.title}
  			</h1>
  		</Header>
			<Image  fluid={project.image.fluid} /> 
			<DescriptionText>
				{project.description}
			</DescriptionText>
			<Footer>

				<ButtonLink href={project.website} color ="blue-lg" icon="link">
					demo
				</ButtonLink>
				<ButtonLink  href={project.source} color ="white" icon="code">
					code
				</ButtonLink>
			</Footer>
    </Wrapper>
  )
}

export default ProjectItem;