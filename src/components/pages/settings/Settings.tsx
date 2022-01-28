import React from 'react';
import Footer from '../../layout/Footer';
import NavBar from '../../layout/HeaderBar';
import Layout from '../../layout/Layout';
import SideBar from '../../layout/SideBar';
import Content from '../dashboard/Content';

const Settings = () => {
  return (
    <Layout>
      <SideBar activePage="settings" />
      {/**@todo replace with context */}
      <NavBar pageName="Settings" />
      <Content></Content>
      <Footer />
    </Layout>
  );
};

export default Settings;
