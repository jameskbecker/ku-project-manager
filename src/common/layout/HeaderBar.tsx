import {
  faBars,
  faChevronDown,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContextMenu from '@kupm/common/contextMenu/ContextMenu';
import { FlexRow } from '@kupm/common/Flex';
import { VerticalSeparator } from '@kupm/common/Separator';
import { useGetUserQuery } from '@kupm/features/api/userApiSlice';
import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import styled, { ThemeContext } from 'styled-components';

const StyledHeaderBar = styled.div`
  grid-area: navbar;
  display: flex;
  gap: 0.75rem;
  align-items: center;

  background: ${({ theme }) => theme.titlebar};
  padding: 1rem;

  /* border-bottom: 1px solid ${({ theme }) => theme.sidebar}; */

  border-bottom: 1px solid ${({ theme }) => theme.secondary};

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
  flex: 1 1 200px;
  display: flex;
  align-items: center;

  box-sizing: border-box;

  h2 {
    flex: 1 1;
  }
`;

const DescriptionContainer = styled(FlexRow)`
  flex: 4 4;
  height: 100%;

  /** Tablet & Mobile  */
  @media screen and (max-width: 600px) {
    display: none;
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
  const theme = useContext(ThemeContext);
  const { data: userResponse, isLoading } = useGetUserQuery(null);

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
        <span>
          {!isLoading ? `Welcome back, ${userResponse?.data.firstName}!` : ''}
        </span>
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

      <DescriptionContainer>
        {description && (
          <>
            <VerticalSeparator />
            <div>{description}</div>
          </>
        )}
      </DescriptionContainer>

      {/* <UserMenu /> */}
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
    color: ${({ theme }) => theme.textBody};
  }

  /** Tablet & Mobile  */
  @media screen and (max-width: 600px) {
    display: none;
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
  background: ${({ theme }) => theme.sidebar};

  cursor: pointer;
  z-index: 1;

  box-shadow: 0 0 5px 1.5px black;
  div {
    opacity: 0.9;
    width: 300px;
    padding: 0.5em 0;
    &:hover {
      opacity: 1;
      color: ${({ theme }) => theme.bg};
    }
  }
`;
