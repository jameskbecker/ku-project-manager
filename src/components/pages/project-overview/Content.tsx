import styled from 'styled-components';

/** @todo optimise large scale displays */
const Content = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  gap: 0.5rem;

  padding: 0.5em 0.25em;
  /** Tablet  */
  @media screen and (min-width: 600px) {
    display: flex;
    flex-direction: column;
    height: auto;
    overflow: auto;

    & > * > * {
      text-align: left;
      flex: 1 1;
      white-space: nowrap;
      text-overflow: ellipsis;
      padding: 0 0.5em;
    }
  }

  /** Desktop  */
`;

export default Content;
