import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../images/logo.png';

const Wrapper = styled.section`
	background: var(--color-darker);
	color: var(--color-white);
  padding: 6em 1.5em; 
  z-index: 2;
  position: relative;

	@media ${props => props.theme.mediaQueries.smaller}{
	  padding: 6em 0;
	}
`

const Container = styled.div`
	display:flex;
	flex-direction: column;
	align-items: center;
	text-align: center;

	@media ${props => props.theme.mediaQueries.smaller}{
	  max-width: 450px;
	  margin: 0 auto;
	}

`

const TalkText = styled.p`
	color: var(--color-white);
	font-size: 2.6rem;
	font-weight: var(--medium);
	text-transform: capitalize;
	line-height: 1.2;

	@media ${props => props.theme.mediaQueries.smallest}{
	  font-size: 3rem;
	}

	@media ${props => props.theme.mediaQueries.smaller}{
	  font-size: 3.5rem;
	}

`
const HightLighter = styled.span`
	color: var(--color-light);
	font-weight: var(--bold);
`

const ContactBox = styled.div`
	margin: 7.5rem 0;
`

const Email = styled.a`
	font-size: 2.4rem;
	font-weight: var(--medium);
	color: var(--color-light); 
	
	@media ${props => props.theme.mediaQueries.smaller}{
	 	font-size: 2.9rem;
	}

`

const ContactList = styled.ul`
	margin-top: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	list-style: none;

`

const ListItem = styled.li`
	padding: 0.3em;
	font-size: 1.8rem;
	line-height: 1;
	a{
		color: var(--color-white);
		font-size: 4rem;
		text-decoration: none;
	
		@media ${props => props.theme.mediaQueries.smaller}{
		  font-size: 4.5rem;
		}

	}

	&:not(:last-child){
		margin-right: 2rem;
	}
`

const LogoBox = styled.div`
	width: 100px;

	img{
		width: 100%;
	}
`

const Footer = (props) => {
  return (
  	<Wrapper id="contact">
  		<Container>  			
	  		<TalkText>
	  			let's talk and  build  <HightLighter> something   awesome </HightLighter> together!
	  		</TalkText>
	  		<ContactBox>
	  			<Email>
	  				hello@felixlopez.xyz
	  			</Email>
	  			<ContactList>
	  				<ListItem>
	  					<a href="https://twitter.com">
	  						<FontAwesomeIcon icon ={['fab', 'github']}/>
	  					</a>
	  				</ListItem>
	  				<ListItem>
	  					<a href="https://twitter.com">
	  						<FontAwesomeIcon icon ={['fab', 'linkedin']}/>
	  					</a>
	  				</ListItem>
	  				<ListItem>
	  					<a href="https://twitter.com">
	  						<FontAwesomeIcon icon ={['fab', 'instagram']}/>
	  					</a>
	  				</ListItem>
	  			</ContactList>
	  		</ContactBox>
	  		<LogoBox>
	  			<img src={logo} alt="felix lopez logo"/>
	  		</LogoBox>
  		</Container>
  	</Wrapper>
  )
}

export default Footer;