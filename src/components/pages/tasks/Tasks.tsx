import { faPencilAlt, faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router';
import {
  fetchAllProjects,
  selectProject,
  toggleNewProject,
} from '../../../store/projects';
import {
  fetchProjectTasks,
  fetchSubTasks,
  selectTask,
  toggleNewTask,
} from '../../../store/tasks';
import { Project } from '../../../types';
import { getCookie } from '../../../utils/cookie';
import Button, { SecondaryButton } from '../../global/Button';
import { FlexRow } from '../../global/Flex';
import Footer from '../../layout/Footer';
import HeaderBar from '../../layout/HeaderBar';
import Layout from '../../layout/Layout';
import SideBar from '../../layout/SideBar';
import AddCommentModal from '../../modals/AddComment';
import InviteModal from '../../modals/InviteModal';
import MembersModal from '../../modals/MembersModal';
import NewProjectModal from '../../modals/NewProjectModal';
import NewTaskModal from '../../modals/NewTaskModal';
import ActivityFeed from './ActivityFeed';
import Content from './Content';
import ControlBar from './ControlBar';
import TaskGrid from './TaskGrid';

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
