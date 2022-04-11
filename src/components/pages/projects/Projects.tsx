import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProjects } from '../../../store/projects';
import Footer from '../../layout/Footer';
import HeaderBar from '../../layout/HeaderBar';
import Layout from '../../layout/Layout';
import SideBar from '../../layout/SideBar';
import Content from './Content';
import ControlBar from './ControlBar';
import NewProjectModal from '../../modals/NewProjectModal';
import ProjectTable from './ProjectTable';
import DeleteAllModal from '../../modals/DeleteAllModal';
import InviteModal from '../../modals/InviteModal';
import { FlexRow } from '../../global/Flex';
import { SecondaryButton } from '../../global/Button';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import { getCookie } from '../../../utils/cookie';

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
    dispatch(fetchAllProjects());
  }, []);

  return (
    <Layout>
      <SideBar activePage="projects" />
      <HeaderBar
        pageName="All Projects"
        Options={() => (
          <FlexRow style={{ flex: '5 1' }}>
            <SecondaryButton icon={faSyncAlt} onClick={null} round light />
          </FlexRow>
        )}
      />
      <ControlBar />

      <Content>
        <ProjectTable />
      </Content>

      {showNewProject && <NewProjectModal />}
      {showDeleteAll && <DeleteAllModal />}
      {showInvite && <InviteModal />}
    </Layout>
  );
};

export default ProjectOverview;
