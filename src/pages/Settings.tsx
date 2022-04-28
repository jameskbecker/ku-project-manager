import NavBar from '@kupm/common/layout/HeaderBar';
import Layout from '@kupm/common/layout/Layout';
import Sidebar from '@kupm/common/sidebar/Sidebar';
import AccountPanel from '@kupm/features/settings/AccountPanel';
import AppearancePanel from '@kupm/features/settings/AppearancePanel';
import Content from '@kupm/features/settings/Content';
import EnrolmentPanel from '@kupm/features/settings/EnrolmentPanel';
import { getCookie } from '@kupm/utils/cookie';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Settings = () => {
  const history = useHistory();

  useEffect(() => {
    if (!getCookie('kupm_user_id')) {
      history.push('/login');
      return;
    }
    document.title = 'Settings | KUPM';
  }, []);

  return (
    <Layout>
      <Sidebar activePage="settings" />
      <NavBar pageName="Settings" />
      <Content>
        <AccountPanel />
        <EnrolmentPanel />
        <AppearancePanel />
      </Content>
    </Layout>
  );
};

export default Settings;
