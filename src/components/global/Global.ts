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
    font-family: sans-serif;
  }


  ul {
    list-style-position: inside;
  }

`;

export default Global;
