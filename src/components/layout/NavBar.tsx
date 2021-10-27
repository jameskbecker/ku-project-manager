import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';

const NavBarWrapper = styled.div`
  grid-area: navbar;
  position: relative;
  flex: 0 1 10%;

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

  /** Desktop  */
  @media screen and (min-width: 992px) {
    display: none;
  }
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
        <h1>KUPM</h1>
      </TitleBar>
    </NavBarWrapper>
  );
};

export default NavBar;
