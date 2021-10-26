import styled from 'styled-components';

/** @todo optimise large scale displays */
const Content = styled.div`
  flex: 1 1;
  margin: 0.5em 0.25em;
  overflow: scroll;

  /** Tablet  */
  @media screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  /** Desktop  */
  @media screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default Content;
