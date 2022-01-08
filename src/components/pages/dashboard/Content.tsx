import styled from 'styled-components';

/** @todo optimise large scale displays */
const Content = styled.div`
  grid-area: content;
  grid-row: 2 / span 2;
  gap: 0.5rem;
  margin: 0.5rem;

  padding: 0.5em 0.25em;

  /** Tablet  */
  @media screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  /** Desktop  */
`;

export default Content;
