import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';

const NavBarWrapper = styled.div`
  position: relative;
  height: 10vh;

  font-size: 1.5rem;
  text-align: center;
  color: black;
  background-color: ${theme.secondary};
`;

const Menu = styled.div`
  position: absolute;
  left: 0.5em;
  height: 100%;
  display: flex;
  align-items: center;
`;

const TitleBar = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  & > * {
    flex: 1 1;
  }
`;

const NavBar = () => {
  return (
    <NavBarWrapper>
      <Menu>
        <FontAwesomeIcon icon={faBars} />
      </Menu>

      <TitleBar>
        <div>KUPM</div>
      </TitleBar>
    </NavBarWrapper>
  );
};

export default NavBar;
