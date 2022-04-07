import { createGlobalStyle } from 'styled-components';
//default theme?
const Global = createGlobalStyle<any>`
  * {
    margin: 0;
    padding: 0;
    min-width: 0;
    overflow: hidden;


    ::selection {
      background: ${({ theme }) => theme.brand};
      color: ${({ theme }) => theme.textBrand};
    }
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
    background: ${({ theme }) => theme.bg};
    height: 100%;
    font-family: -apple-system, Inter, sans-serif;
    font-size: 0.75rem;
    font-weight: 500;
    color: ${({ theme }) => theme.text};

  }

  div {
    color: ${({ theme }) => theme.textBody};
  }

  

  h2, h3, h4 {
    color: ${({ theme }) => theme.text};
    font-family: -apple-system, Inter, sans-serif;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  h1 {
    font-size: 2rem;
    font-weight: 800;
    color: ${({ theme }) => theme.textBrand};
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 700;

    /* Mobile */
    @media screen and (max-width: 479px) {
      font-size: 1.375rem;
    }
  }

  h3 {
    font-size: 1.125rem;
    font-weight: 700;
    grid-area: title;

    /* Mobile */
    @media screen and (max-width: 479px) {
      font-size: 1rem;
    }
  }

  h4 {
    font-size: 1rem;
    font-weight: 600;

    /* Mobile */
    @media screen and (max-width: 479px) {
      font-size: 0.875rem;
    }
  }

  h5 {
    font-size: 0.875rem;
    font-weight: 700;
    color: ${({ theme }) => theme.textBody};

    /* Mobile */
    @media screen and (max-width: 479px) {
      font-size: 0.75rem;
    }
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
    color: ${({ theme }) => theme.textBody};
  }

 
`;

export default Global;
