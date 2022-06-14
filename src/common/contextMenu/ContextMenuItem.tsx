import styled from 'styled-components';
import { FlexRow } from '../Flex';

const ContextMenuItem = styled(FlexRow)`
  justify-content: center;

  font-size: 0.75rem;
  font-weight: 500;
  text-align: center;
  color: ${({ color, theme }) => (color ? color : theme.textBody)};
  background: transparent;
  padding: 0.5rem 2rem;
  border-radius: 0.5rem;

  cursor: pointer;
  white-space: nowrap;

  :hover {
    color: ${({ theme }) => theme.textBrand};
    background: ${({ color, theme }) => (color ? color : theme.brand)};
    transition: 0.5s ease-in-out;
  }
`;

export default ContextMenuItem;
