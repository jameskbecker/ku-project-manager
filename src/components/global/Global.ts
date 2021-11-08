import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import theme from '../../theme';

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    min-width: 0;
    overflow: hidden;
    color: ${theme.text};


    /* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: ${theme.dark};
  border-radius: 5px;
}
  }

  body {
    background-color: ${theme.bg};
    height: 100%;
    font-family: Maven Pro, Poppins, sans-serif;


  }

  h1, h2, h3, h4, h5 {
    color: ${theme.heading};
  }

  h1, h2 {
    padding: 1em;
  }

  h2 {
    grid-area: title;
  }

  h3 {
    color: ${theme.text};
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
