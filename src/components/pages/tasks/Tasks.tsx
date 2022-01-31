import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchAllTasks } from '../../../store/tasks';
import { Project } from '../../../types';
import Footer from '../../layout/Footer';
import NavBar from '../../layout/HeaderBar';
import Layout from '../../layout/Layout';
import SideBar from '../../layout/SideBar';
import NewProjectModal from '../projects/NewProjectModal';
import Content from './Content';
import ControlBar from './ControlBar';
import TaskGrid from './TaskGrid';

const Project = () => {
  const { id, taskId } = useParams<any>();
  const { showNewProject } = useSelector((state: any) => state.projects);
  const { pageName } = useSelector((state: any) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(id, taskId);
    dispatch(fetchAllTasks({ projectId: id }));
  }, []);

  return (
    <Layout>
      <SideBar activePage="projects" />
      <ControlBar />
      <NavBar back pageName={pageName} />
      <Content>
        <TaskGrid />
      </Content>
      <Footer />
      {showNewProject && <NewProjectModal />}
    </Layout>
  );
};

export default Project;