import styled from 'styled-components';

/** @todo optimise large scale displays */
const Content = styled.div`
  flex: 1 1;
  grid-area: content;

  overflow: scroll;

  /** Tablet  */
  @media screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      'header header'
      'content content';
  }

  /** Desktop  */
  @media screen and (min-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      'header header header'
      'content content header';
  }
`;

export default Content;
