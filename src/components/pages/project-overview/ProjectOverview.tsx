import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProjects } from '../../../store/projects';
import Footer from '../../layout/Footer';
import Layout from '../../layout/Layout';
import NavBar, { UserModal } from '../../layout/HeaderBar';
import SideBar from '../../layout/SideBar';
import Content from './Content';
import ControlBar from './ControlBar';
import NewProjectModal from './NewProjectModal';
import ProjectTable from './ProjectTable';
import ProjectTableRow from './ProjectTableRow';

type Project = {
  id: string;
  name: string;
  description: string;
  isComplete: boolean;
  priority: number;
  createdAt: number;
  completedAt: number | null;
  memberGroupId: string;
};

const ProjectOverview = () => {
  const [showUserModal, setShowUserModal] = useState(false);
  const { showNewProject } = useSelector((state: any) => state.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProjects());
  }, []);

  const toggleUserModal = () => {
    setShowUserModal(!showUserModal);
  };

  return (
    <Layout>
      <SideBar activePage="projects" />
      <NavBar pageName="Projects" toggleUserModal={toggleUserModal} />
      <ControlBar />
      <Content onClick={() => setShowUserModal(false)}>
        <ProjectTable />
      </Content>
      <Footer />
      {showUserModal && <UserModal />}
      {showNewProject && <NewProjectModal />}
    </Layout>
  );
};

export default ProjectOverview;
