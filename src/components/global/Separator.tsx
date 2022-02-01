import styled from 'styled-components';
import theme from '../../theme';

const Separator = styled.div`
  min-height: 1px;
  max-height: 1px;

  background-color: ${theme.highlight};
  margin: 0.5rem 0;
`;

export default Separator;
