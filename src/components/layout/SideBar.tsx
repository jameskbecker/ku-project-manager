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
  background-color: ${theme.secondaryA};

  /** Desktop  */
  @media screen and (min-width: 992px) {
    display: initial;
  }
`;

const SideBarButton = styled.div`
  padding: 1em 0.75em;

  opacity: 0.65;
  cursor: pointer;

  &:hover {
    transition: 0.25s ease-in-out;
    opacity: 1;
  }

  & > :first-child {
    padding: 0 0.75em 0 0;
  }
`;

const SideBar = () => {
  return (
    <SideBarWrapper>
      <h1>KUPM</h1>
      <SideBarButton>
        <FontAwesomeIcon icon={faTachometerAlt} />
        <Link to="/">Dashboard</Link>
      </SideBarButton>
      <SideBarButton>
        <FontAwesomeIcon icon={faList} />
        <Link to="/projects">Projects</Link>
      </SideBarButton>
      <SideBarButton>
        <FontAwesomeIcon icon={faCogs} />
        <a>Settings</a>
      </SideBarButton>
    </SideBarWrapper>
  );
};

export default SideBar;
