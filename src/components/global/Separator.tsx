import styled from 'styled-components';
import theme from '../../theme';

const Separator = styled.div`
  min-height: 1px;
  max-height: 1px;

  background-color: ${theme.highlight};
`;

export const VerticalSeparator = styled.div`
  flex: 0 0 1px;
  height: 100%;
  min-width: 1px;
  max-width: 1px;

  background-color: ${theme.highlight};
`;

export default Separator;
