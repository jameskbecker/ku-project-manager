import {
  faArrowLeft,
  faBars,
  faCaretDown,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { ProgressPlugin } from 'webpack';
import theme from '../../theme';

const NavBarWrapper = styled.div`
  grid-area: navbar;
  position: relative;
  flex: 0 1 10%;
  display: flex;
  color: black;
  background-color: ${theme.secondaryB};
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
  height: 100%;

  display: flex;
  align-items: center;

  margin: 0 0.25em;

  h2 {
    flex: 1 1;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;

/** @todo propably better solution than absolute positioning */
const UserWrapper = styled.div`
  display: none;
  position: absolute;
  top: calc(50% - 1rem);
  right: 0.5em;
  height: 100%;

  font-size: 1rem;
  text-align: right;
  padding: 0.5em;

  opacity: 0.75;
  cursor: pointer;

  &:hover {
    transition: 0.2 5s ease-in-out;
    opacity: 1;
  }

  & > :first-child {
    margin: 0 0.25em 0 0;
  }

  /** Tablet  */
  @media screen and (min-width: 600px) {
    display: block;
  }
`;

const UserModalWrapper = styled.div`
  position: absolute;
  top: 10%;
  right: 0;
  height: 100px;
  width: 200px;

  font-size: 1rem;
  text-align: right;

  border-radius: 0 0 0.5em 0.5em;
  background-color: grey;

  cursor: pointer;
  z-index: 1;

  a {
    width: 100%;
    padding: 0.5em;
    &:hover {
      background-color: white;
    }
  }
`;

export const UserModal = () => {
  return (
    <UserModalWrapper>
      <a>Sign Out</a>
    </UserModalWrapper>
  );
};

type NavBarProps = {
  pageName: string;
  toggleUserModal?: () => void;
};

const NavBar = ({ pageName, toggleUserModal }: NavBarProps) => {
  const history = useHistory();

  return (
    <NavBarWrapper>
      <Menu>
        <FontAwesomeIcon icon={faBars} />
      </Menu>

      <TitleBar>
        <FontAwesomeIcon icon={faArrowLeft} onClick={history.goBack} />
        <h2>{pageName}</h2>
      </TitleBar>

      <UserWrapper onClick={toggleUserModal}>
        <span>Welcome back, John!</span>
        <FontAwesomeIcon icon={faCaretDown} />
      </UserWrapper>
    </NavBarWrapper>
  );
};

export default NavBar;
