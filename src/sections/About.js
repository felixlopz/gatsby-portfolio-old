import React from 'react';
import styled from 'styled-components';

// components
import Heading from '../components/Heading';
import StackList from '../components/StackList';

const Wrapper = styled.section`
	background: var(--color-white);
	color: var(--color-darker);
  padding: 6em 1.5em;
  z-index: 2;
  position: relative;

	@media ${props => props.theme.mediaQueries.smaller}{
	  padding: 6em 2.5em;
	}

	@media ${props => props.theme.mediaQueries.small}{
	  padding: 6em 3em;
	}

`
const AboutWrapper = styled.div`
`
const StackWrapper = styled.div`
 margin-top: 6rem;
`
const TextContainer = styled.div`
	margin-top: 2rem;	

	@media ${props => props.theme.mediaQueries.small}{
	  margin-left: 4rem;
	  margin-right: 4rem;
	}
`
const Paragraph = styled.p`
	font-size: 1.7rem;
	font-weight: var(--regular);
	line-height: 1.4;
	&:not(:last-child){
		margin-bottom: 2rem; 
	
		@media ${props => props.theme.mediaQueries.small}{
		  margin-bottom: 2.2rem;
		  line-height: 1.5; 
		}

	}

	@media ${props => props.theme.mediaQueries.small}{
	 font-size: 2.1rem;
	}

`
const StackTextContainer = styled.div`
	margin-top: 1.5rem;
	@media ${props => props.theme.mediaQueries.small}{
	  margin-left: 4rem;
	  margin-right: 4rem;
	}
`
const HightLighter = styled.span`
	font-weight: var(--bold);
	text-decoration: underline;
`

const About = (props) => {

  return (
  	<Wrapper id="about">
	  	<AboutWrapper>
	  		<Heading>
	  			about
	  		</Heading>
	  		<TextContainer>
					<Paragraph>
						Hi, my name is Felix Lopez, a 21 years old <HightLighter> Front End Web Developer </HightLighter> and student of Informatics Engineering from Venezuela
					</Paragraph>	
					<Paragraph>
						I started web development more than a year ago doing some projects assigned by a class at university, from there I got hooked on this world and started making my own projects.
					</Paragraph>	
					<Paragraph>
						I'm <HightLighter>self-taught</HightLighter>, fast learner, and a true believer that anything
						 can be possible with hard work, dedication, and passion.
					</Paragraph>
	  		</TextContainer>			
	  	</AboutWrapper>
	  	<StackWrapper>
	  		<Heading>
	  			stack
	  		</Heading>
	  		<StackTextContainer>
					<Paragraph >
						These are some of the tecnologies and languages that I have used in my projects
					</Paragraph>
	  		</StackTextContainer>
				<StackList />
	  	</StackWrapper>
  	</Wrapper>
  )
}

export default About;