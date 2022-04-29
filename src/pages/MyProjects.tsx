import { FlexColumn } from '@kupm/common/Flex';
import HeaderBar from '@kupm/common/layout/HeaderBar';
import Layout from '@kupm/common/layout/Layout';
import DeleteProjectsModal from '@kupm/features/deleteProjectsModal/DeleteProjectsModal';
import InviteModal from '@kupm/features/inviteModal/InviteModal';
import MyProjectsControlBar from '@kupm/features/myProjectsControlbar/MyProjectsControlbar';
import NewProjectModal from '@kupm/features/newProjectModal/NewProjectModal';
import ProjectTable from '@kupm/features/projectTable/ProjectTable';
import Sidebar from '@kupm/features/sidebar/Sidebar';
import { getCookie } from '@kupm/utils/cookie';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

/** @todo optimise large scale displays */
const MyProjectsContent = styled(FlexColumn)`
  grid-area: content;
  justify-content: flex-start;
  align-items: stretch;

  padding: 1rem;
  /** Tablet  */
  @media screen and (min-width: 600px) {
    display: flex;
    flex-direction: column;
    height: auto;
    overflow: auto;
  }

  /** Desktop  */
`;

const MyProjects = () => {
  const history = useHistory();
  const { showNewProjectModal } = useSelector(
    (state: any) => state.newProjectModal
  );
  const { showDeleteProjectsModal } = useSelector(
    (state: any) => state.deleteProjectsModal
  );
  const { visible: showInvite } = useSelector(
    (state: any) => state.inviteModal
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!getCookie('kupm_user_id')) {
      history.push('/login');
      return;
    }
    document.title = 'Projects | KUPM';
  }, []);

  return (
    <Layout>
      <Sidebar activePage="projects" />
      <HeaderBar pageName="My Projects" />
      <MyProjectsControlBar />

      <MyProjectsContent>
        <ProjectTable />
        <ProjectTable complete />
      </MyProjectsContent>

      {showNewProjectModal && <NewProjectModal />}
      {showDeleteProjectsModal && <DeleteProjectsModal />}
      {showInvite && <InviteModal />}
    </Layout>
  );
};

export default MyProjects;
