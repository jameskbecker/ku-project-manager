import HeaderBar from '@kupm/components/layout/HeaderBar';
import Layout from '@kupm/components/layout/Layout';
import SideBar from '@kupm/components/layout/SideBar';
import DeleteAllModal from '@kupm/components/modals/DeleteAllModal';
import InviteModal from '@kupm/components/modals/InviteModal';
import NewProjectModal from '@kupm/components/modals/NewProjectModal';
import Content from '@kupm/components/projects/Content';
import ControlBar from '@kupm/components/projects/ControlBar';
import ProjectTable from '@kupm/components/projects/ProjectTable';
import { fetchAllProjects } from '@kupm/store/projects';
import { fetchAccountDetails } from '@kupm/store/settings';
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
