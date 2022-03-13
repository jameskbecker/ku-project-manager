import {
  faArrowLeft,
  faBars,
  faChevronDown,
  faChevronLeft,
  faPencilAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { toggleNewProject } from '../../store/projects';
import theme from '../../theme';
import Button from '../global/Button';
import ContextMenu from '../global/ContextMenu';
import { FlexRow } from '../global/Flex';
import TextInput from '../global/input/TextInput';
import { VerticalSeparator } from '../global/Separator';

const StyledHeaderBar = styled.div`
  grid-area: navbar;
  display: flex;
  gap: 0.75rem;
  align-items: center;

  background: ${theme.titlebar};
  padding: 1rem;

  /* border-bottom: 1px solid ${theme.sidebar}; */

  border-bottom: 1px solid ${theme.secondary};

  overflow-y: visible;
`;

const Menu = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 1.5rem;

  /* Desktop  */
  @media screen and (min-width: 992px) {
    display: none;
  }
`;

const TitleBar = styled.div`
  flex: 1 1;
  display: flex;
  align-items: center;

  box-sizing: border-box;

  h2 {
    flex: 1 1;
  }
`;

type NavBarProps = {
  pageName: string;
  description?: string;
  back?: boolean;
  toggleUserModal?: () => void;
  Options?: any;
};

const HeaderBar = ({ back, pageName, description, Options }: NavBarProps) => {
  const history = useHistory();

  const handleAccount = () => {
    history.push('/settings');
  };

  const handleSignout = () => {
    history.push('/login');
  };

  const UserMenu = () => {
    return (
      <UserWrapper
        classNamePrefix="User-Wrapper"
        items={[
          { label: 'Account', onClick: handleAccount },
          { label: 'Sign Out', onClick: handleSignout },
        ]}
      >
        <span>Welcome back, John!</span>
        <FontAwesomeIcon icon={faChevronDown} color={theme.brand} />
      </UserWrapper>
    );
  };

  return (
    <StyledHeaderBar style={{ overflow: 'visible' }}>
      <FlexRow style={{ flex: '2 2' }}>
        {back && (
          <FontAwesomeIcon
            icon={faChevronLeft}
            onClick={history.goBack}
            color={theme.brand}
            style={{ cursor: 'pointer', fontSize: '1.125rem' }}
          />
        )}
        <TitleBar>
          <h2>{pageName}</h2>
        </TitleBar>
        {Options && <Options />}
      </FlexRow>

      <FlexRow style={{ flex: '4 4', height: '100%' }}>
        {description && (
          <>
            <VerticalSeparator />
            <div>{description}</div>
          </>
        )}
      </FlexRow>

      <UserMenu />
      <Menu>
        <FontAwesomeIcon icon={faBars} color={theme.brand} />
      </Menu>
    </StyledHeaderBar>
  );
};

export default HeaderBar;

/** @todo propably better solution than absolute positioning */
const UserWrapper = styled(ContextMenu)`
  //flex: 2 2 !important;

  height: 100%;
  & > *,
  & > * > * {
    user-select: none;
  }

  & > :first-child {
    justify-content: flex-end !important;
  }

  span {
    cursor: pointer;
    color: ${theme.textBody};
  }
`;

const UserModalWrapper = styled.div`
  position: absolute;
  top: 10%;
  right: 1.5rem;
  height: auto;
  width: 300px;

  font-size: 1rem;
  text-align: center;

  border-radius: 0 0 0.5em 0.5em;
  background: ${theme.sidebar};

  cursor: pointer;
  z-index: 1;

  box-shadow: 0 0 5px 1.5px black;
  div {
    opacity: 0.9;
    width: 300px;
    padding: 0.5em 0;
    &:hover {
      opacity: 1;
      color: ${theme.bg};
    }
  }
`;
