import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledSidebarLogo = styled.div`
  display: flex;
  height: 115px;
`;

export const LogoWrapper = styled.div<any>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  flex: 1 1;
  max-height: ${({ collapsed }) => (collapsed ? '50px' : '115px')};

  background: ${({ theme }) => theme.brand};
  box-sizing: border-box;
  margin: ${({ collapsed }) => (collapsed ? '1rem 0.75rem' : '2rem 1.75rem')};
  border-radius: 1rem;

  /* box-shadow: 0.25rem 0.25rem black; */

  h1 {
    width: 100%;
    text-align: center;
    color: ${({ theme }) => theme.textBrand};
  }
`;

const SidebarLogo = () => {
  const { isCollapsed } = useSelector((state: any) => state.sidebar);
  return (
    <LogoWrapper collapsed={isCollapsed}>
      <h1>{isCollapsed ? 'K' : 'KUPM'}</h1>
    </LogoWrapper>
  );
};

export default SidebarLogo;
