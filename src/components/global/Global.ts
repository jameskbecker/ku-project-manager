import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import theme from '../../theme';

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    min-width: 0;
  }

  body {
    background-color: ${theme.bg};
    height: 100%;
    font-family: Maven Pro, Poppins, sans-serif;


  }

  #root {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
  
  }


  h1, h2 {
    margin: 1em;
  }


  ul {
    list-style-position: inside;
  }

 
`;

export default Global;
