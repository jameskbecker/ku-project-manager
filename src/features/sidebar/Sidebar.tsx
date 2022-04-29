import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import Button from '@kupm/common/Button';
import SidebarLogo from '@kupm/features/sidebar/SidebarLogo';
import SidebarMenu from '@kupm/features/sidebar/SidebarMenu';
import { toggle } from '@kupm/features/sidebar/sidebarSlice';
import SidebarUser from '@kupm/features/sidebar/SidebarUser';
import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { ThemeContext } from 'styled-components';

const StyledSidebar = styled.div`
  display: none;
  grid-area: sidebar;
  background: ${({ theme }) => theme.bg};
  border-right: 1px solid ${({ theme }) => theme.secondary};
  /** Desktop  */
  @media screen and (min-width: 992px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 220px;
  }
`;

const Sidebar = () => {
  const { isCollapsed } = useSelector((state: any) => state.sidebar);
  const dispatch = useDispatch();

  const handleCollapse = () => {
    dispatch(toggle());
  };

  const otherOptions: any = {};
  if (isCollapsed) otherOptions.style = { width: '75px' };

  return (
    <StyledSidebar {...otherOptions}>
      <SidebarLogo />
      <SidebarMenu />
      <Button
        light
        icon={isCollapsed ? faChevronRight : faChevronLeft}
        text={isCollapsed ? '' : 'Collapse Sidebar'}
        // color={theme.brand}
        onClick={handleCollapse}
        style={{ margin: '0 1rem' }}
      />
      {/* <Footer /> */}

      <SidebarUser />
    </StyledSidebar>
  );
};

export default Sidebar;
