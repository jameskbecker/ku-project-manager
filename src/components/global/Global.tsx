import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import theme from '../../theme';

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    min-width: 0;
    overflow: hidden;


    /* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 5px;
  box-shadow: inset 0 0 10px 10px green;
  border: solid 3px transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  /* background: ${theme.dark}; */
  /* border-radius: 5px; */
  box-shadow: inset 0 0 10px 10px red;
  border: solid 3px transparent;
}
  }

  body {
    background-color: ${theme.bg};
    height: 100%;
    font-family:  sans-serif;
    color: ${theme.text};

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
