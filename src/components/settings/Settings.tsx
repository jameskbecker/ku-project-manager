import NavBar from '@kupm/components/layout/HeaderBar';
import Layout from '@kupm/components/layout/Layout';
import SideBar from '@kupm/components/layout/SideBar';
import AccountPanel from '@kupm/components/settings/AccountPanel';
import AppearancePanel from '@kupm/components/settings/AppearancePanel';
import Content from '@kupm/components/settings/Content';
import EnrolmentPanel from '@kupm/components/settings/EnrolmentPanel';
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
      <SideBar activePage="settings" />
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
