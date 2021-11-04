import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Content from '../global/Content';
import Panel from '../global/Panel';
import Footer from '../layout/Footer';
import Layout from '../layout/Layout';
import NavBar, { UserModal } from '../layout/NavBar';
import SideBar from '../layout/SideBar';

const Project = () => {
  const [showUserModal, setShowUserModal] = useState(false);
  const { id } = useParams<any>();

  const toggleUserModal = () => {
    setShowUserModal(!showUserModal);
  };

  return (
    <Layout>
      <SideBar />
      <NavBar
        back
        pageName={'Project ' + id}
        toggleUserModal={toggleUserModal}
      />
      <Content onClick={() => setShowUserModal(false)}></Content>
      <Footer />
      {showUserModal && <UserModal />}
    </Layout>
  );
};

export default Project;
