import { FlexColumn } from '@kupm/common/Flex';
import NavBar from '@kupm/common/layout/HeaderBar';
import Layout from '@kupm/common/layout/Layout';
import AccountPanel from '@kupm/features/accountPanel/AccountPanel';
import AppearancePanel from '@kupm/features/appearancePanel/AppearancePanel';
import EnrolmentPanel from '@kupm/features/enrolmentPanel/EnrolmentPanel';
import Sidebar from '@kupm/features/sidebar/Sidebar';
import { setActivePage } from '@kupm/features/sidebar/sidebarSlice';
import { getCookie } from '@kupm/utils/cookie';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

/** @todo optimise large scale displays */
const SettingsContent = styled(FlexColumn)`
  grid-area: content;
  grid-row: 2 / span 3;
  padding: 1rem;

  /** Tablet  */
  @media screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(0, min-content);
  }

  /** Desktop  */
`;

const Settings = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!getCookie('kupm_user_id')) {
      history.push('/login');
      return;
    }
    document.title = 'Settings | KUPM';
    dispatch(setActivePage('settings'));
  }, []);

  return (
    <Layout>
      <Sidebar />
      <NavBar pageName="Settings" />
      <SettingsContent>
        <AccountPanel />
        <EnrolmentPanel />
        <AppearancePanel />
      </SettingsContent>
    </Layout>
  );
};

export default Settings;
