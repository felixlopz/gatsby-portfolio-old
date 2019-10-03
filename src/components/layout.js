import React from "react"
import { Link } from "gatsby"
import styled, { ThemeProvider }from "styled-components"

import SEO from "../components/seo"

// Styled components theme
import theme from '../utils/theme';
import GlobalStyles from '../utils/globals';

import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faBars,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';


const StyledMain = styled.main`
  position: relative;
`

library.add(
  fab,
  faBars,
  faEnvelope,
 );


const Layout = ({children}) => {
   
  return (
    <ThemeProvider theme={theme}>
      <SEO title="Felix Lopez"/>
      <StyledMain>{children}</StyledMain>
      <GlobalStyles/>
    </ThemeProvider>
  )
}

export default Layout
