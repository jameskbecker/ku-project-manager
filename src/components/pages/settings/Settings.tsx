import NavBar from '@/components/layout/HeaderBar';
import Layout from '@/components/layout/Layout';
import SideBar from '@/components/layout/SideBar';
import AccountPanel from '@/components/pages/settings/AccountPanel';
import AppearancePanel from '@/components/pages/settings/AppearancePanel';
import Content from '@/components/pages/settings/Content';
import EnrolmentPanel from '@/components/pages/settings/EnrolmentPanel';
import { getCookie } from '@/utils/cookie';
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
