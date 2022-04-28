import React from 'react';
import styled from 'styled-components';

const StyledSidebarLogo = styled.div`
  display: flex;
  height: 115px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  flex: 1 1;

  background: ${({ theme }) => theme.brand};
  box-sizing: border-box;
  margin: 2rem 1.75rem;
  border-radius: 1rem;

  /* box-shadow: 0.25rem 0.25rem black; */

  h1 {
    width: 100%;
    text-align: center;
    color: ${({ theme }) => theme.textBrand};
  }
`;

const SidebarLogo = () => {
  return (
    <StyledSidebarLogo>
      <LogoWrapper>
        <h1>KUPM</h1>
      </LogoWrapper>
    </StyledSidebarLogo>
  );
};

export default SidebarLogo;
