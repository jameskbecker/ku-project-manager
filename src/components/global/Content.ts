import styled from 'styled-components';

/** @todo optimise large scale displays */
const Content = styled.div`
  flex: 1 1;
  grid-area: content;
  padding: 0.5em 0.25em;

  /** Tablet  */
  @media screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  /** Desktop  */
`;

export default Content;
