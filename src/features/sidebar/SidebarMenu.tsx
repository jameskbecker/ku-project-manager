import {
  faCogs,
  faList,
  faSignOutAlt,
  faTachometerAlt,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FlexColumn } from '@kupm/common/Flex';
import Separator from '@kupm/common/Separator';
import SidebarButton from '@kupm/features/sidebar/SidebarButton';
import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

const StyledSidebarMenu = styled(FlexColumn)`
  flex: 1 1;
  gap: 0.75rem;
  margin-top: 1rem;
`;

const SidebarMenu = ({ activePage }: any) => {
  const theme = useContext(ThemeContext);
  return (
    <StyledSidebarMenu>
      <SidebarButton
        to="/"
        text="Dashboard"
        icon={faTachometerAlt}
        $active={activePage === 'dashboard'}
      />
      <SidebarButton
        to="/projects"
        text="My Projects"
        icon={faList}
        $active={activePage === 'projects'}
      />
      <SidebarButton
        to="/projects"
        text="Other Projects"
        icon={faUsers}
        $active={activePage === 'other'}
      />
      <Separator />
      <SidebarButton
        to="/settings"
        text="Settings"
        icon={faCogs}
        $active={activePage === 'settings'}
      />
      <SidebarButton
        to="/login"
        text="Sign Out"
        icon={faSignOutAlt}
        color={theme.error}
      />
    </StyledSidebarMenu>
  );
};

export default SidebarMenu;
