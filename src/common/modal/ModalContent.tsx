import Panel from '@kupm/common/Panel';
import styled from 'styled-components';

export const ModalContent = styled(Panel)`
  flex: 0 1 auto;
  width: calc(100% - 2rem);

  background: ${({ theme }) => theme.primary};
  padding: 1rem;

  opacity: 1;
  cursor: default;
  overflow: visible;

  :hover {
    background: ${({ theme }) => theme.primary};
  }

  /**Tablet */
  @media screen and (min-width: 768px) {
    width: 600px;
  }
`;

export default ModalContent;
