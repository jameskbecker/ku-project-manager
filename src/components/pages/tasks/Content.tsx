import styled from 'styled-components';

/** @todo optimise large scale displays */
const Content = styled.div`
  grid-area: content;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  gap: 0.5rem;

  padding: 1rem;

  /** Tablet  */
  @media screen and (min-width: 600px) {
    display: flex;
    flex-direction: column;
    height: auto;
    overflow: auto;
  }

  /** Desktop  */
`;

export default Content;
