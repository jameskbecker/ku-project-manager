import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchAllProjects, selectProject } from '../../../store/projects';
import {
  fetchProjectTasks,
  fetchSubTasks,
  selectTask,
} from '../../../store/tasks';
import { Project } from '../../../types';
import Footer from '../../layout/Footer';
import NavBar from '../../layout/HeaderBar';
import Layout from '../../layout/Layout';
import SideBar from '../../layout/SideBar';
import NewProjectModal from '../../modals/NewProjectModal';
import NewTaskModal from '../../modals/NewTaskModal';
import Content from './Content';
import ControlBar from './ControlBar';
import TaskGrid from './TaskGrid';

const Project = () => {
  const { id, taskId } = useParams<any>();
  const { showNewProject, selectedProject } = useSelector(
    (state: any) => state.projects
  );
  const { pageName, showNewTask } = useSelector((state: any) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!selectedProject) {
      dispatch(selectProject(id));
    }

    dispatch(selectTask(taskId));

    //change to specific project
    dispatch(fetchAllProjects());

    if (taskId) dispatch(fetchSubTasks({ taskId }));
    else dispatch(fetchProjectTasks({ projectId: id }));
  }, [id, taskId]);

  return (
    <Layout>
      <SideBar activePage="projects" />
      <ControlBar />
      <NavBar back pageName={pageName} />
      <Content>
        <TaskGrid />
      </Content>

      {showNewProject && <NewProjectModal />}
      {showNewTask && <NewTaskModal />}
    </Layout>
  );
};

export default Project;
