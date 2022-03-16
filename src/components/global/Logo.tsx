import React from 'react';
import styled from 'styled-components';
import { FlexRow } from './Flex';

const StyledLogo = styled(FlexRow)`
  height: 99px;
  width: 144px;
  justify-content: center;

  background: ${({ theme }) => theme.brand};
  border-radius: 1rem;
`;

const Logo = () => (
  <StyledLogo>
    <h1>KUPM</h1>
  </StyledLogo>
);

export default Logo;
