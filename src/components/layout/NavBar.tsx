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
  position: relative;
  display: flex;
  background-color: ${theme.bg};
  color: ${theme.text};
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
    color: ${theme.text};

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
  color: ${theme.text};
  text-align: right;
  padding: 0.5em 1em;

  cursor: pointer;

  & > :first-child {
    opacity: 0.5;
    margin: 0 0.25em 0 0;

    &:hover {
      transition: 0.25s ease-in-out;
      opacity: 1;
    }
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
  back?: boolean;
  toggleUserModal?: () => void;
};

const NavBar = ({ back, pageName, toggleUserModal }: NavBarProps) => {
  const history = useHistory();

  return (
    <NavBarWrapper>
      <Menu>
        <FontAwesomeIcon icon={faBars} />
      </Menu>

      <TitleBar>
        {back && (
          <FontAwesomeIcon icon={faArrowLeft} onClick={history.goBack} />
        )}
        <h2>{pageName}</h2>
      </TitleBar>

      <UserWrapper onClick={toggleUserModal}>
        <span>Welcome back, John!</span>
        <FontAwesomeIcon icon={faChevronDown} color={theme.primary} />
      </UserWrapper>
    </NavBarWrapper>
  );
};

export default NavBar;
