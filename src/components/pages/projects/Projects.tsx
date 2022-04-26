import HeaderBar from '@/components/layout/HeaderBar';
import Layout from '@/components/layout/Layout';
import SideBar from '@/components/layout/SideBar';
import DeleteAllModal from '@/components/modals/DeleteAllModal';
import InviteModal from '@/components/modals/InviteModal';
import NewProjectModal from '@/components/modals/NewProjectModal';
import Content from '@/components/pages/projects/Content';
import ControlBar from '@/components/pages/projects/ControlBar';
import ProjectTable from '@/components/pages/projects/ProjectTable';
import { fetchAllProjects } from '@/store/projects';
import { fetchAccountDetails } from '@/store/settings';
import { getCookie } from '@/utils/cookie';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

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
  const history = useHistory();
  const { showDeleteAll, showNewProject } = useSelector(
    (state: any) => state.projects
  );
  const { showInvite } = useSelector((state: any) => state.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!getCookie('kupm_user_id')) {
      history.push('/login');
      return;
    }
    document.title = 'Projects | KUPM';
    dispatch(fetchAccountDetails());
    dispatch(fetchAllProjects());
  }, []);

  const handleRefresh = () => {
    dispatch(fetchAllProjects());
  };

  return (
    <Layout>
      <SideBar activePage="projects" />
      <HeaderBar pageName="My Projects" />
      <ControlBar />

      <Content>
        <ProjectTable />
        <ProjectTable complete />
      </Content>

      {showNewProject && <NewProjectModal />}
      {showDeleteAll && <DeleteAllModal />}
      {showInvite && <InviteModal />}
    </Layout>
  );
};

export default ProjectOverview;
