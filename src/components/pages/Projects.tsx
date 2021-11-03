import React, { useEffect, useState } from 'react';
import Content from '../global/Content';
import Panel from '../global/Panel';
import Footer from '../layout/Footer';
import Layout from '../layout/Layout';
import NavBar, { UserModal } from '../layout/NavBar';
import SideBar from '../layout/SideBar';

type Project = {
  id: string;
  name: string;
  isComplete: boolean;
  priority: number;
  timeCreated: number;
  timeCompleted: number | null;
  memberGroupId: string;
};

const Projects = () => {
  const [showUserModal, setShowUserModal] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    loadProjectData();
  }, []);

  const loadProjectData = async () => {
    const resp = await window.fetch('/api/project', {
      headers: {
        accept: 'application/json',
      },
    });
    const body = await resp.json();
    setProjects(body);
  };

  const toggleUserModal = () => {
    setShowUserModal(!showUserModal);
  };

  const getProjects = projects.map((p) => (
    <Panel heading={p.name} key={p.id}>
      <div>A project about my life...</div>
      <div>Status: {p.isComplete ? 'Complete!' : 'Incomplete'}</div>
      <div>Created: {new Date(p.timeCreated).toLocaleString()}</div>
    </Panel>
  ));

  return (
    <Layout>
      <SideBar />
      <NavBar pageName="Projects" toggleUserModal={toggleUserModal} />
      <Content onClick={() => setShowUserModal(false)}>{getProjects}</Content>
      <Footer />
      {showUserModal && <UserModal />}
    </Layout>
  );
};

export default Projects;
