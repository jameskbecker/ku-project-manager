import {
  faArrowLeft,
  faBars,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import theme from '../../theme';

const NavBarWrapper = styled.div`
  grid-area: navbar;
  display: flex;
  align-items: center;
  background-color: ${theme.bg};
  color: ${theme.text};

  & > * {
    margin: 0 1em;
  }
`;

const Menu = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 1.5rem;

  /* * Desktop 
  @media screen and (min-width: 992px) {
    display: none;
  } */
`;

const TitleBar = styled.div`
  flex: 1 1;
  display: flex;
  align-items: center;
  padding: 1em 0;
  h2 {
    flex: 1 1;
    color: ${theme.text};

    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    padding: 0;
  }
`;

/** @todo propably better solution than absolute positioning */
const UserWrapper = styled.div`
  display: none;

  font-size: 1rem;
  color: ${theme.text};

  text-align: right;
  padding: 1em 0;

  cursor: pointer;

  & > :first-child {
    opacity: 0.5;
    margin: 0 0.25em 0 0;

    &:hover {
      transition: 0.25s ease-in-out;
      opacity: 1;
    }
  }

  & > :last-child {
    padding: 0 0.5em;
  }

  /** Tablet  */
  @media screen and (min-width: 600px) {
    display: block;
  }
`;

const UserModalWrapper = styled.div`
  position: absolute;
  top: 10%;
  right: 1.5rem;
  height: 200px;
  width: 300px;

  font-size: 1rem;
  text-align: center;

  border-radius: 0 0 0.5em 0.5em;
  background-color: ${theme.sidebar};

  cursor: pointer;
  z-index: 1;

  box-shadow: 0 0 5px 1.5px black;
  div {
    opacity: 0.8;
    width: 300px;
    padding: 0.5em 0;
    &:hover {
      opacity: 1;
      color: ${theme.bg};
      background-color: ${theme.primary};
    }
  }
`;

export const UserModal = () => {
  return (
    <UserModalWrapper>
      <div>Sign Out</div>
    </UserModalWrapper>
  );
};

type NavBarProps = {
  pageName: string;
  back?: boolean;
  toggleUserModal?: () => void;
};

const NavBar = ({ back, pageName, toggleUserModal }: NavBarProps) => {
  const history = useHistory();

  return (
    <NavBarWrapper>
      {back && (
        <Menu>
          <FontAwesomeIcon
            icon={faArrowLeft}
            onClick={history.goBack}
            color={theme.primary}
          />
        </Menu>
      )}

      <TitleBar>
        <h2>{pageName}</h2>
      </TitleBar>

      <UserWrapper onClick={toggleUserModal}>
        <span>Welcome back, John!</span>
        <FontAwesomeIcon icon={faChevronDown} color={theme.primary} />
      </UserWrapper>

      <Menu>
        <FontAwesomeIcon icon={faBars} color={theme.primary} />
      </Menu>
    </NavBarWrapper>
  );
};

export default NavBar;
