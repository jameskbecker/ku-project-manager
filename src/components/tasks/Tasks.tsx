import { SecondaryButton } from '@kupm/components/common/Button';
import { FlexRow } from '@kupm/components/common/Flex';
import HeaderBar from '@kupm/components/layout/HeaderBar';
import Layout from '@kupm/components/layout/Layout';
import SideBar from '@kupm/components/layout/SideBar';
import AddCommentModal from '@kupm/components/modals/AddComment';
import InviteModal from '@kupm/components/modals/InviteModal';
import MembersModal from '@kupm/components/modals/MembersModal';
import NewProjectModal from '@kupm/components/modals/NewProjectModal';
import NewTaskModal from '@kupm/components/modals/NewTaskModal';
import ActivityFeed from '@kupm/components/tasks/ActivityFeed';
import Content from '@kupm/components/tasks/Content';
import ControlBar from '@kupm/components/tasks/ControlBar';
import TaskGrid from '@kupm/components/tasks/TaskGrid';
import {
  fetchAllProjects,
  selectProject,
  toggleNewProject,
} from '@kupm/store/projects';
import { fetchAccountDetails } from '@kupm/store/settings';
import {
  fetchProjectTasks,
  fetchSubTasks,
  selectTask,
  toggleNewTask,
} from '@kupm/store/tasks';
import { Project } from '@kupm/types';
import { getCookie } from '@kupm/utils/cookie';
import { faPencilAlt, faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';

const Project = () => {
  const history = useHistory();
  const { id, taskId } = useParams<any>();
  const { showInvite, showNewProject, selectedProject } = useSelector(
    (state: any) => state.projects
  );
  const { pageName, description, showNewTask, showMembers, showAddComment } =
    useSelector((state: any) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!getCookie('kupm_user_id')) {
      history.push('/login');
      return;
    }
    if (!selectedProject) {
      dispatch(selectProject(id));
    }

    dispatch(fetchAccountDetails());
    dispatch(selectTask(taskId));

    //change to specific project
    dispatch(fetchAllProjects());

    if (taskId) dispatch(fetchSubTasks({ taskId }));
    else dispatch(fetchProjectTasks({ projectId: id }));
  }, [id, taskId]);

  const handleEdit = () => {
    dispatch(!taskId ? toggleNewProject() : toggleNewTask());
  };

  const handleRefresh = () => {
    if (taskId) dispatch(fetchSubTasks({ taskId }));
    else dispatch(fetchProjectTasks({ projectId: id }));
  };

  return (
    <Layout>
      <SideBar activePage="projects" />
      <ControlBar />
      <HeaderBar
        back
        pageName={pageName}
        description={description}
        Options={() => (
          <FlexRow>
            <SecondaryButton
              icon={faPencilAlt}
              onClick={handleEdit}
              round
              light
            />
            <SecondaryButton
              icon={faSyncAlt}
              onClick={handleRefresh}
              round
              light
            />
          </FlexRow>
        )}
      />
      <Content>
        <TaskGrid />
        <ActivityFeed />
      </Content>

      {showNewProject && <NewProjectModal />}
      {showInvite && <InviteModal />}
      {showNewTask && <NewTaskModal />}
      {showAddComment && <AddCommentModal />}
      {showMembers && <MembersModal />}
    </Layout>
  );
};

export default Project;
