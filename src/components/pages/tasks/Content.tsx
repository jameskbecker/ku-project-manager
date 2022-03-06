import styled from 'styled-components';

/** @todo optimise large scale displays */
const Content = styled.div`
  grid-area: content;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  /* align-items: stretch; */

  /** Tablet  */
  @media screen and (min-width: 600px) {
    display: flex;
    flex-direction: row;
    height: auto;
    overflow: auto;
  }

  /** Desktop  */
`;

export default Content;
