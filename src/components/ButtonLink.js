import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledButton = styled.a.attrs({ target: '_blank' })`
	overflow: hidden;
	text-align: center;
	position: relative;
	font-size: 1.2rem;
	font-weight: var(--bold);
	padding: 0.5em 1em;	
	text-transform: uppercase;
	letter-spacing: 1px;
	text-decoration: none;
	outline: none;
	
	${props => {
		if (props.color === 'white'){
			return `
			 	color: var(--color-darker);
			 	background: var(--color-white);
			`
		}else if (props.color === 'transparent'){
			return `
				background: transparent;
				border: 1px solid var(--color-white);
				color: var(--color-white);
			`
		}
	}}

	display: flex;
	align-items: center;

	span{
		margin-left: ${({icon}) => icon ? `0.5rem` : ``}
	}

	@media ${props => props.theme.mediaQueries.small}{
	  font-size: 1.4rem;
	}

`
const ButtonLink = ({color, icon, children, ...props}) => {
  return (
    <StyledButton {...props} color={color} icon={icon}>
			<FontAwesomeIcon icon={icon}/>
    	<span>
    		{children}	
    	</span>
    </StyledButton>
  )
}

export default ButtonLink;