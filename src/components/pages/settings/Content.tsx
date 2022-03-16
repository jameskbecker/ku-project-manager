import styled from 'styled-components';

/** @todo optimise large scale displays */
const Content = styled.div`
  grid-area: content;
  grid-row: 2 / span 3;
  gap: 0.75rem;

  padding: 1rem;

  /** Tablet  */
  @media screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(0, auto);
  }

  /** Desktop  */
`;

export default Content;