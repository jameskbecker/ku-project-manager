import React, { useEffect } from 'react';
import Footer from '../../layout/Footer';
import NavBar from '../../layout/HeaderBar';
import Layout from '../../layout/Layout';
import SideBar from '../../layout/SideBar';
import Content from '../dashboard/Content';

const Settings = () => {
  useEffect(() => {
    document.title = 'Settings | KUPM';
  }, []);

  return (
    <Layout>
      <SideBar activePage="settings" />
      {/**@todo replace with context */}
      <NavBar pageName="Settings" />
      <Content></Content>
    </Layout>
  );
};

export default Settings;
