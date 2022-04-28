import HeaderBar from '@kupm/common/layout/HeaderBar';
import Layout from '@kupm/common/layout/Layout';
import Sidebar from '@kupm/features/sidebar/Sidebar';
import Content from '@kupm/features/projects/Content';
import ControlBar from '@kupm/features/projects/ControlBar';
import DeleteAllModal from '@kupm/features/projects/DeleteAllModal';
import InviteModal from '@kupm/features/projects/InviteModal';
import NewProjectModal from '@kupm/features/projects/NewProjectModal';
import ProjectTable from '@kupm/features/projects/ProjectTable';
import { getCookie } from '@kupm/utils/cookie';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const OtherProjects = () => {
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
    document.title = 'Other Projects | KUPM';
  }, []);

  return (
    <Layout>
      <Sidebar activePage="other" />
      <HeaderBar pageName="Other Projects" />
      <ControlBar />

      <Content></Content>

      {showNewProject && <NewProjectModal />}
      {showDeleteAll && <DeleteAllModal />}
      {showInvite && <InviteModal />}
    </Layout>
  );
};

export default OtherProjects;
