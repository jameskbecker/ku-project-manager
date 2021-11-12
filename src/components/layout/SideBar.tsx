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
  background-color: ${theme.sidebar};

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

  background-color: ${theme.primary};

  margin: 1.75em;
  border-radius: 0.25em;
  h1 {
    color: ${theme.bg};
    padding: 0;
  }
`;

const SideBarButton = styled(Link)`
  width: 100%;

  font-size: 1rem;
  margin: 0.25em 0.5em;
  padding: 1em 0.75em;
  opacity: 0.65;
  cursor: pointer;

  &:hover {
    transition: 0.25s ease-in-out;
    opacity: 1;
  }

  & > :first-child {
    padding: 0 0.5em 0 0;
  }
`;

const SideBar = () => {
  return (
    <SideBarWrapper>
      <LogoWrapper>
        <h1>KUPM</h1>
      </LogoWrapper>
      <SideBarButton to="/">
        <FontAwesomeIcon icon={faTachometerAlt} />
        Dashboard
      </SideBarButton>
      <SideBarButton to="/projects">
        <FontAwesomeIcon icon={faList} />
        Projects
      </SideBarButton>
      <SideBarButton to="/settings">
        <FontAwesomeIcon icon={faCogs} />
        Settings
      </SideBarButton>
    </SideBarWrapper>
  );
};

export default SideBar;
