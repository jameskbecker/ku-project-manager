import Accordion from '@kupm/common/accordion/Accordion';
import AccordionItem from '@kupm/common/accordion/AccordionItem';
import { FlexColumn } from '@kupm/common/Flex';
import HeaderBar from '@kupm/common/layout/HeaderBar';
import Layout from '@kupm/common/layout/Layout';
import DeleteProjectsModal from '@kupm/features/deleteProjectsModal/DeleteProjectsModal';
import InviteModal from '@kupm/features/inviteModal/InviteModal';
import MyProjectsTable from '@kupm/features/myProjectsTable/MyProjectsTable';
import NewProjectModal from '@kupm/features/newProjectModal/NewProjectModal';
import SharedProjectsControlbar from '@kupm/features/sharedProjectsControlbar/SharedProjectsControlbar';
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
  const { newProjectModalVisible } = useSelector(
    (state: any) => state.newProjectModal
  );
  const { deleteProjectsModalVisible } = useSelector(
    (state: any) => state.deleteProjectsModal
  );
  const { inviteModalVisible } = useSelector((state: any) => state.inviteModal);

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
      <SharedProjectsControlbar />
      <OtherProjectsContent>
        <Accordion>
          <AccordionItem name="Incomplete" open>
            <MyProjectsTable />
          </AccordionItem>
          <AccordionItem name="Complete">
            <MyProjectsTable complete />
          </AccordionItem>
        </Accordion>
      </OtherProjectsContent>

      {newProjectModalVisible && <NewProjectModal />}
      {deleteProjectsModalVisible && <DeleteProjectsModal />}
      {inviteModalVisible && <InviteModal />}
    </Layout>
  );
};

export default OtherProjects;
