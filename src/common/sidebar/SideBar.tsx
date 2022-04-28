import { FlexColumn } from '@kupm/common/Flex';
import Footer from '@kupm/common/layout/Footer';
import {
  faCogs,
  faList,
  faSignOutAlt,
  faTachometerAlt,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled, { css, ThemeContext } from 'styled-components';
import Separator from '../Separator';

const SideBarWrapper = styled.div`
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

const StyledSidebarButton = styled(Link)<any>`
  padding: 0.5rem 0.75rem;
  margin: 0 1rem;

  font-size: 0.75rem;
  font-weight: ${({ $active }) => ($active ? 600 : 500)};
  color: ${({ $active, theme }) =>
    $active ? theme.text : theme.text} !important;
  background: ${({ $active, theme }) =>
    $active ? theme.highlight : 'transparent'};
  border-radius: 0.25rem;
  box-sizing: border-box;

  opacity: ${({ $active }) => ($active ? 1 : 0.8)};
  cursor: pointer;

  :hover {
    transition: 0.5s ease-in-out;
    background: ${({ theme }) => theme.highlight};
    opacity: 1;
  }

  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.brandAlt};
    outline-offset: 0;
  }

  & > :first-child {
    padding: 0 0.5em 0 0;
  }

  ${({ theme, color }) =>
    color &&
    css`
      & > * {
        color: ${color} !important;
      }
      :hover {
        background: ${color};

        & > * {
          color: ${theme.textButton} !important;
        }
      }
    `}
`;

const SidebarButton = ({ to, $active, color, icon, text }: any) => (
  <StyledSidebarButton {...{ to, $active, color }}>
    <FontAwesomeIcon icon={icon} />
    <span>{text}</span>
  </StyledSidebarButton>
);

type SideBarProps = {
  activePage: string;
};

const SideBar = ({ activePage }: SideBarProps) => {
  const theme = useContext(ThemeContext);
  return (
    <SideBarWrapper>
      <div style={{ display: 'flex', height: '155px' }}>
        <LogoWrapper>
          <h1>KUPM</h1>
        </LogoWrapper>
      </div>
      <FlexColumn style={{ flex: '1 1', gap: '0.75rem', marginTop: '1rem' }}>
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
      </FlexColumn>
      <Footer />
    </SideBarWrapper>
  );
};

export default SideBar;
