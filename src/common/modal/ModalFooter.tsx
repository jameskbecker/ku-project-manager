import styled from 'styled-components';

const ModalFooter = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  padding: 0;
  margin: 0;

  & > * {
    flex: 1 0 auto;
  }

  /** Tablet  */
  @media screen and (min-width: 768px) {
    flex: 0 0 auto;
    flex-direction: row;

    & > * {
      flex: 1 1;
    }
  }
`;

export default ModalFooter;
