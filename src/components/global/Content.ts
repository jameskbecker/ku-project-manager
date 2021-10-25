import styled from 'styled-components';

/** @todo optimise large scale displays */
const Content = styled.div`
  /** Tablet  */
  @media screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  /** Desktop  */
  @media screen and (min-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default Content;
