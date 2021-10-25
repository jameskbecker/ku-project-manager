import styled from 'styled-components';

/** @todo optimise large scale displays */
const Content = styled.div`
  flex: 0 1 70vh;

  /** Tablet  */
  @media screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr 5fr;
  }

  /** Desktop  */
  @media screen and (min-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr 5fr;
  }
`;

export default Content;
