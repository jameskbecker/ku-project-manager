import {
  faCogs,
  faList,
  faTachometerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../theme';

const SideBarWrapper = styled.div`
  display: none;
  grid-area: sidebar;
  background: ${theme.sidebar};

  /** Desktop  */
  @media screen and (min-width: 992px) {
    display: flex;
    flex-direction: column;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;

  background: ${theme.brand};

  margin: 1.75em;
  border-radius: 0.25em;
  h1 {
    color: ${theme.textBrand};
    padding: 0;
  }
`;

const SideBarButton = styled(Link)<any>`
  font-size: 0.875rem;
  margin: 0.75em 0 0.75rem 1em;
  padding: 0.75em 0.75em;
  opacity: ${({ active }) => (active ? 1 : 0.65)};
  cursor: pointer;

  font-weight: ${({ active }) => (active ? '600' : 'normal')};
  color: ${theme.text} !important;
  background: ${({ active }) => (active ? 'grey' : 'transparent')};

  border-radius: 5px 0 0 5px;
  &:hover {
    transition: 0.25s ease-in-out;
    opacity: 1;
  }

  & > :first-child {
    padding: 0 0.5em 0 0;
  }
`;

type SideBarProps = {
  activePage: string;
};

const SideBar = ({ activePage }: SideBarProps) => {
  return (
    <SideBarWrapper>
      <LogoWrapper>
        <h1>KUPM</h1>
      </LogoWrapper>
      <SideBarButton to="/" active={activePage === 'dashboard'}>
        <FontAwesomeIcon icon={faTachometerAlt} />
        Dashboard
      </SideBarButton>
      <SideBarButton to="/projects" active={activePage === 'projects'}>
        <FontAwesomeIcon icon={faList} />
        Projects
      </SideBarButton>
      <SideBarButton to="/settings" active={activePage === 'settings'}>
        <FontAwesomeIcon icon={faCogs} />
        Settings
      </SideBarButton>
    </SideBarWrapper>
  );
};

export default SideBar;
