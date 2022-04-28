import Footer from '@kupm/common/layout/Footer';
import React from 'react';
import styled from 'styled-components';
import SidebarLogo from './SidebarLogo';
import SidebarMenu from './SidebarMenu';

const StyledSidebar = styled.div`
  display: none;
  grid-area: sidebar;
  background: ${({ theme }) => theme.bg};
  border-right: 1px solid ${({ theme }) => theme.secondary};

  /** Desktop  */
  @media screen and (min-width: 992px) {
    display: flex;
    flex-direction: column;
  }
`;

type SidebarProps = {
  activePage: string;
};

const Sidebar = (props: SidebarProps) => {
  return (
    <StyledSidebar>
      <SidebarLogo />
      <SidebarMenu {...props} />
      <Footer />
    </StyledSidebar>
  );
};

export default Sidebar;
