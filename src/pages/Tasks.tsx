import { faPencilAlt, faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { SecondaryButton } from '@kupm/common/Button';
import { FlexRow } from '@kupm/common/Flex';
import HeaderBar from '@kupm/common/layout/HeaderBar';
import Layout from '@kupm/common/layout/Layout';
import SideBar from '@kupm/common/layout/SideBar';
import InviteModal from '@kupm/features/projects/InviteModal';
import MembersModal from '@kupm/features/projects/MembersModal';
import NewProjectModal from '@kupm/features/projects/NewProjectModal';
import {
  selectProject,
  toggleNewProject,
} from '@kupm/features/projects/projectsSlice';
import { fetchAccountDetails } from '@kupm/features/settings/settingsSlice';
import ActivityFeed from '@kupm/features/tasks/ActivityFeed';
import AddCommentModal from '@kupm/features/tasks/AddComment';
import Content from '@kupm/features/tasks/Content';
import ControlBar from '@kupm/features/tasks/ControlBar';
import NewTaskModal from '@kupm/features/tasks/NewTaskModal';
import TaskGrid from '@kupm/features/tasks/TaskGrid';
import {
  fetchProjectTasks,
  fetchSubTasks,
  selectTask,
  toggleNewTask,
} from '@kupm/features/tasks/tasksSlice';
import { Project } from '@kupm/types';
import { getCookie } from '@kupm/utils/cookie';
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
    //dispatch(fetchAllProjects());

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