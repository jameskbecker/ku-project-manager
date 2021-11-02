import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import theme from '../../theme';

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    min-width: 0;
    overflow: hidden;
  }

  body {
    background-color: ${theme.bg};
    height: 100%;
    font-family: Maven Pro, Poppins, sans-serif;


  }

  #root {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  h1, h2 {
    padding: 1em;
  }

  h2 {
    grid-area: title;
  }


  ul {
    list-style-position: inside;
  }

  a, a:visited, a:hover, a:active {
  color: inherit;
  text-decoration: none;
}

 
`;

export default Global;
