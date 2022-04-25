import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getCookie } from '../../../utils/cookie';
import NavBar from '../../layout/HeaderBar';
import Layout from '../../layout/Layout';
import SideBar from '../../layout/SideBar';
import AccountPanel from './AccountPanel';
import AppearancePanel from './AppearancePanel';
import Content from './Content';
import EnrolmentPanel from './EnrolmentPanel';

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
