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

    /* border-radius: 5px; */
    box-shadow: inset 0 0 10px 10px red;
    border: solid 3px transparent;
  }


  body {
    background: ${theme.bg};
    height: 100%;
    font-family: Inter, Poppins, sans-serif;
    font-size: 0.75rem;
    font-weight: 500;
    color: ${theme.text};

  }

  

  h2, h3, h4 {
    color: ${theme.text};
    font-family: Inter, sans-serif;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  h1 {
    font-size: 2rem;
    font-weight: 800;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
  }

  h3 {
    font-size: 1.125rem;
    font-weight: 700;
    grid-area: title;
  }

  h4 {
    font-size: 1rem;
    font-weight: 600;
  }

  h5 {
    font-size: 0.875rem;
    color: ${theme.textBody};
  }

  ul {
    list-style-position: inside;
  }

  a, a:visited, a:hover, a:active {
    color: inherit;
    text-decoration: none;
  }

  p {
    font-size: 0.75rem;
    font-weight: 400;
    overflow: hidden;
    word-break: break-word;
    white-space: normal;
    text-overflow: ellipsis;
    color: ${theme.textBody};
  }

 
`;

export default Global;
