import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const FlexRow = styled(Flex)`
  flex-direction: row;
  align-items: center;

  /* & > * {
    flex: 1 1;
  } */
`;

export const FlexColumn = styled(Flex)`
  flex-direction: column;
  justify-content: flex-start;
  max-height: 100%;
  /* align-items: stretch; */

  /* & > * {
    flex: 0 1 auto;
  } */
`;
