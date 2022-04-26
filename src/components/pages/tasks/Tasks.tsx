import { SecondaryButton } from '@/components/global/Button';
import { FlexRow } from '@/components/global/Flex';
import HeaderBar from '@/components/layout/HeaderBar';
import Layout from '@/components/layout/Layout';
import SideBar from '@/components/layout/SideBar';
import AddCommentModal from '@/components/modals/AddComment';
import InviteModal from '@/components/modals/InviteModal';
import MembersModal from '@/components/modals/MembersModal';
import NewProjectModal from '@/components/modals/NewProjectModal';
import NewTaskModal from '@/components/modals/NewTaskModal';
import ActivityFeed from '@/components/pages/tasks/ActivityFeed';
import Content from '@/components/pages/tasks/Content';
import ControlBar from '@/components/pages/tasks/ControlBar';
import TaskGrid from '@/components/pages/tasks/TaskGrid';
import {
  fetchAllProjects,
  selectProject,
  toggleNewProject,
} from '@/store/projects';
import { fetchAccountDetails } from '@/store/settings';
import {
  fetchProjectTasks,
  fetchSubTasks,
  selectTask,
  toggleNewTask,
} from '@/store/tasks';
import { Project } from '@/types';
import { getCookie } from '@/utils/cookie';
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
