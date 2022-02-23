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
import { FlexColumn } from '../global/Flex';
import Footer from './Footer';

const SideBarWrapper = styled.div`
  display: none;
  grid-area: sidebar;
  background: ${theme.bg};
  border-right: 1px solid ${theme.secondary};

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

  background: ${theme.brand};
  box-sizing: border-box;
  margin: 2rem 1.75rem;
  border-radius: 1rem;

  box-shadow: 0.25rem 0.25rem black;

  h1 {
    width: 100%;
    text-align: center;
    color: ${theme.textBrand};
  }
`;

const SideBarButton = styled(Link)<any>`
  padding: 0.5rem 0.75rem;
  margin: 0 1rem;

  font-size: 0.75rem;
  font-weight: ${({ $active }) => ($active ? 600 : 500)};
  color: ${({ $active }) => ($active ? theme.text : theme.text)} !important;
  background: ${(props) => (props.$active ? theme.secondary : 'transparent')};
  border-radius: 0.25rem;
  box-sizing: border-box;

  opacity: ${({ $active }) => ($active ? 1 : 0.65)};
  cursor: pointer;

  :hover {
    transition: 0.25s ease-in-out;
    background: ${theme.secondary};
    opacity: 1;
  }

  :focus-visible {
    outline: 2px solid ${theme.brandAlt};
    outline-offset: 0;
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
      <div style={{ display: 'flex', height: '155px' }}>
        <LogoWrapper>
          <h1>KUPM</h1>
        </LogoWrapper>
      </div>
      <FlexColumn style={{ flex: '1 1', gap: '0.75rem', marginTop: '1rem' }}>
        <SideBarButton to="/" $active={activePage === 'dashboard'}>
          <FontAwesomeIcon icon={faTachometerAlt} />
          Dashboard
        </SideBarButton>
        <SideBarButton to="/projects" $active={activePage === 'projects'}>
          <FontAwesomeIcon icon={faList} />
          Projects
        </SideBarButton>
        <SideBarButton to="/settings" $active={activePage === 'settings'}>
          <FontAwesomeIcon icon={faCogs} />
          Settings
        </SideBarButton>
      </FlexColumn>
      <Footer />
    </SideBarWrapper>
  );
};

export default SideBar;
