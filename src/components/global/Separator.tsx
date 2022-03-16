import styled from 'styled-components';

const Separator = styled.div`
  min-height: 1px;
  max-height: 1px;

  background: ${({ theme }) => theme.highlight};
`;

export const VerticalSeparator = styled.div`
  flex: 0 0 1px;
  height: 100%;
  min-width: 1px;
  max-width: 1px;

  background: ${({ theme }) => theme.highlight};
`;

export default Separator;
