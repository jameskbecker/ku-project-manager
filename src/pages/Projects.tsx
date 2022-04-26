import HeaderBar from '@kupm/common/layout/HeaderBar';
import Layout from '@kupm/common/layout/Layout';
import SideBar from '@kupm/common/layout/SideBar';
import DeleteAllModal from '@kupm/features/projects/DeleteAllModal';
import InviteModal from '@kupm/features/projects/InviteModal';
import NewProjectModal from '@kupm/features/projects/NewProjectModal';
import Content from '@kupm/features/projects/Content';
import ControlBar from '@kupm/features/projects/ControlBar';
import ProjectTable from '@kupm/features/projects/ProjectTable';
import { fetchAllProjects } from '@kupm/features/projects/projectsSlice';
import { fetchAccountDetails } from '@kupm/features/settings/settingsSlice';
import { getCookie } from '@kupm/utils/cookie';
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
