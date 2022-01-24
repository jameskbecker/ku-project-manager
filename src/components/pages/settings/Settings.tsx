import React, { useState } from 'react';
import Footer from '../../layout/Footer';
import Layout from '../../layout/Layout';
import NavBar, { UserModal } from '../../layout/HeaderBar';
import SideBar from '../../layout/SideBar';
import Content from '../dashboard/Content';

const Settings = () => {
  const [showUserModal, setShowUserModal] = useState(false);

  const toggleUserModal = () => {
    setShowUserModal(!showUserModal);
  };

  return (
    <Layout>
      <SideBar activePage="settings" />
      {/**@todo replace with context */}
      <NavBar pageName="Settings" toggleUserModal={toggleUserModal} />
      <Content onClick={() => setShowUserModal(false)}></Content>
      <Footer />
      {showUserModal && <UserModal />}
    </Layout>
  );
};

export default Settings;
