import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProjects } from '../../../store/projects';
import Footer from '../../layout/Footer';
import NavBar from '../../layout/HeaderBar';
import Layout from '../../layout/Layout';
import SideBar from '../../layout/SideBar';
import Content from './Content';
import ControlBar from './ControlBar';
import NewProjectModal from '../../modals/NewProjectModal';
import ProjectTable from './ProjectTable';
import DeleteAllModal from '../../modals/DeleteAllModal';
import InviteModal from '../../modals/InviteModal';

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
  const { showDeleteAll, showNewProject } = useSelector(
    (state: any) => state.projects
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProjects());
  }, []);

  return (
    <Layout>
      <SideBar activePage="projects" />
      <NavBar pageName="Projects" />
      <ControlBar />
      <Content>
        <ProjectTable />
      </Content>

      {showNewProject && <NewProjectModal />}
      {showDeleteAll && <DeleteAllModal />}
    </Layout>
  );
};

export default ProjectOverview;
