import {
  faCogs,
  faList,
  faTachometerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

const SideBarWrapper = styled.div`
  display: none;
  grid-area: sidebar;
  background-color: #6666d3;

  /** Desktop  */
  @media screen and (min-width: 992px) {
    display: initial;
  }
`;

const SideBarButton = styled.div`
  text-align: center;
  padding: 1em 0.5em;

  opacity: 0.65;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  & > :first-child {
    padding: 0 0.25em 0 0;
  }
`;

const SideBar = () => {
  return (
    <SideBarWrapper>
      <SideBarButton>
        <FontAwesomeIcon icon={faTachometerAlt} />
        <a>Dashboard</a>
      </SideBarButton>
      <SideBarButton>
        <FontAwesomeIcon icon={faList} />
        <a>Projects</a>
      </SideBarButton>
      <SideBarButton>
        <FontAwesomeIcon icon={faCogs} />
        <a>Settings</a>
      </SideBarButton>
    </SideBarWrapper>
  );
};

export default SideBar;
