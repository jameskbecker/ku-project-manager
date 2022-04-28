import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Footer from '@kupm/common/layout/Footer';
import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Separator from '../../common/Separator';
import SidebarButton from './SidebarButton';
import SidebarLogo from './SidebarLogo';
import SidebarMenu from './SidebarMenu';
import SidebarUser from './SidebarUser';

const StyledSidebar = styled.div`
  display: none;
  grid-area: sidebar;
  background: ${({ theme }) => theme.bg};
  border-right: 1px solid ${({ theme }) => theme.secondary};
  /** Desktop  */
  @media screen and (min-width: 992px) {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

type SidebarProps = {
  activePage: string;
};

const Sidebar = (props: SidebarProps) => {
  const theme = useContext(ThemeContext);
  return (
    <StyledSidebar>
      <SidebarLogo />
      <SidebarMenu {...props} />
      <SidebarButton
        icon={faChevronLeft}
        text="Collapse Sidebar"
        color={theme.brand}
        style={{ textAlign: 'center' }}
      />
      {/* <Footer /> */}

      <SidebarUser />
    </StyledSidebar>
  );
};

export default Sidebar;
