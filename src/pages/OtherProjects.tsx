import { FlexColumn } from '@kupm/common/Flex';
import HeaderBar from '@kupm/common/layout/HeaderBar';
import Layout from '@kupm/common/layout/Layout';
import DeleteProjectsModal from '@kupm/features/deleteProjectsModal/DeleteProjectsModal';
import InviteModal from '@kupm/features/inviteModal/InviteModal';
import MyProjectsControlBar from '@kupm/features/myProjectsControlbar/MyProjectsControlbar';
import NewProjectModal from '@kupm/features/newProjectModal/NewProjectModal';
import Sidebar from '@kupm/features/sidebar/Sidebar';
import { setActivePage } from '@kupm/features/sidebar/sidebarSlice';
import { getCookie } from '@kupm/utils/cookie';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

/** @todo optimise large scale displays */
const OtherProjectsContent = styled(FlexColumn)`
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

const OtherProjects = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { showDeleteAll, showNewProject } = useSelector(
    (state: any) => state.projects
  );
  const { visible: showInvite } = useSelector(
    (state: any) => state.inviteModal
  );

  useEffect(() => {
    if (!getCookie('kupm_user_id')) {
      history.push('/login');
      return;
    }
    document.title = 'Other Projects | KUPM';
    dispatch(setActivePage('shared'));
  }, []);

  return (
    <Layout>
      <Sidebar />
      <HeaderBar pageName="Other Projects" />

      <OtherProjectsContent></OtherProjectsContent>

      {showNewProject && <NewProjectModal />}
      {showDeleteAll && <DeleteProjectsModal />}
      {showInvite && <InviteModal />}
    </Layout>
  );
};

export default OtherProjects;
