import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Project } from '../../../types';
import Panel from '../../global/Panel';
import Footer from '../../layout/Footer';
import Layout from '../../layout/Layout';
import NavBar, { UserModal } from '../../layout/NavBar';
import SideBar from '../../layout/SideBar';
import Content from './Content';
import ControlBar from './ControlBar';
import ProjectPanel from './ProjectPanel';

const Project = () => {
  const { id } = useParams<any>();
  const [showUserModal, setShowUserModal] = useState(false);
  const [project, setProject] = useState<Project>();

  useEffect(() => {
    loadProjectData();
  }, []);

  const loadProjectData = async () => {
    try {
      const resp = await window.fetch(
        `https://kupm-api.herokuapp.com/api/projects/${id}`
      );
      const body = await resp.json();
      if (body.error) return;
      setProject(body);
    } catch (e) {}
  };

  const toggleUserModal = () => {
    setShowUserModal(!showUserModal);
  };

  return (
    <Layout>
      <SideBar activePage="projects" />
      <ControlBar />
      <NavBar
        back
        pageName={project ? project.name : ''}
        toggleUserModal={toggleUserModal}
      />
      <Content onClick={() => setShowUserModal(false)}>
        {project && ProjectPanel}
      </Content>
      <Footer />
      {showUserModal && <UserModal />}
    </Layout>
  );
};

export default Project;
