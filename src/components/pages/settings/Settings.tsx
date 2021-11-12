import React, { useState } from 'react';
import Content from '../../global/Content';
import Footer from '../../layout/Footer';
import Layout from '../../layout/Layout';
import NavBar, { UserModal } from '../../layout/NavBar';
import SideBar from '../../layout/SideBar';

const Settings = () => {
  const [showUserModal, setShowUserModal] = useState(false);

  const toggleUserModal = () => {
    setShowUserModal(!showUserModal);
  };

  return (
    <Layout>
      <SideBar />
      {/**@todo replace with context */}
      <NavBar pageName="Settings" toggleUserModal={toggleUserModal} />
      <Content onClick={() => setShowUserModal(false)}>
        {/* Consider making calendar its own page to prevent long mobile page */}
        {/* <Panel heading="Calendar">_</Panel> */}
      </Content>
      <Footer />
      {showUserModal && <UserModal />}
    </Layout>
  );
};

export default Settings;
