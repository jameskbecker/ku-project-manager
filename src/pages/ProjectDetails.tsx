import { faPencilAlt, faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { SecondaryButton } from '@kupm/common/Button';
import DataPlaceholder from '@kupm/common/DataPlaceholder';
import { FlexColumn, FlexRow } from '@kupm/common/Flex';
import HeaderBar from '@kupm/common/layout/HeaderBar';
import Layout from '@kupm/common/layout/Layout';
import AddCommentModal from '@kupm/features/addCommentModal/AddCommentModal';
import { useGetProjectTasksQuery } from '@kupm/features/api/apiSlice';
import InviteModal from '@kupm/features/inviteModal/InviteModal';
import MembersModal from '@kupm/features/membersModal/MembersModal';
import NewProjectModal from '@kupm/features/newProjectModal/NewProjectModal';
import NewTaskModal from '@kupm/features/newTaskModal/NewTaskModal';
import ActivityFeed from '@kupm/features/projectActivityFeed/ActivityFeed';
import {
  selectProject,
  toggleNewProject,
} from '@kupm/features/projects/projectsSlice';
import Sidebar from '@kupm/features/sidebar/Sidebar';
import TaskControlBar from '@kupm/features/taskControlBar/TaskControlBar';
import TaskGrid from '@kupm/features/taskGrid/TaskGrid';
import { getCookie } from '@kupm/utils/cookie';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import styled from 'styled-components';

/** @todo optimise large scale displays */
const ProjectDetailsContent = styled(FlexColumn)`
  grid-area: content;
  justify-content: flex-start;

  /* align-items: stretch; */

  /** Tablet  */
  @media screen and (min-width: 600px) {
    flex-direction: row;
    gap: 0;
    height: auto;
    overflow: auto;
  }

  /** Desktop  */
`;

const ProjectDetails = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams<any>();
  const { showNewProject, selectedProject } = useSelector(
    (state: any) => state.projects
  );
  const { visible: showInvite } = useSelector(
    (state: any) => state.inviteModal
  );
  const { showNewTask, showMembers, showAddComment } = useSelector(
    (state: any) => state.tasks
  );
  const { data: tasks, isLoading, refetch } = useGetProjectTasksQuery({ id });

  useEffect(() => {
    if (!getCookie('kupm_user_id')) {
      history.push('/login');
      return;
    }
    if (!selectedProject) {
      dispatch(selectProject(id));
    }
  }, []);

  const handleEdit = () => {
    toggleNewProject();
  };
  const headerOptions = () => (
    <FlexRow>
      <SecondaryButton icon={faPencilAlt} onClick={handleEdit} round light />
      <SecondaryButton icon={faSyncAlt} onClick={refetch} round light />
    </FlexRow>
  );
  let headerData;
  let taskContent;
  if (isLoading) {
    headerData = {
      pageName: 'Loading...',
      description: 'Loading...',
    };
    taskContent = <DataPlaceholder>Loading...</DataPlaceholder>;
  } else {
    headerData = {
      pageName: tasks.data?.name,
      description: tasks.data?.description,
    };
    taskContent = <TaskGrid data={tasks.data?.tasks} />;
  }

  return (
    <Layout>
      <Sidebar activePage="projects" />
      <TaskControlBar />
      <HeaderBar back {...headerData} Options={headerOptions} />
      <ProjectDetailsContent>
        {taskContent}
        <ActivityFeed />
      </ProjectDetailsContent>

      {showNewProject && <NewProjectModal />}
      {showInvite && <InviteModal />}
      {showNewTask && <NewTaskModal />}
      {showAddComment && <AddCommentModal />}
      {showMembers && <MembersModal />}
    </Layout>
  );
};

export default ProjectDetails;
