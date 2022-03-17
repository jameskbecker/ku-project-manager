import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import comments from '../../../mock-data/comment';
import todo from '../../../mock-data/task';
import { Project } from '../../../types';
import Panel from '../../global/Panel';
import Footer from '../../layout/Footer';
import NavBar from '../../layout/HeaderBar';
import Layout from '../../layout/Layout';
import SideBar from '../../layout/SideBar';
import Content from './Content';
import NotificationPanel from './NotificationPanel';
import TodoPanel from './TodoPanel';
import UpcomingPanel from './UpcomingPanel';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProjects } from '../../../store/projects';
import { fetchNotifications, fetchTodo } from '../../../store/dashboard';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { notifications, todo } = useSelector((state: any) => state.dashboard);
  const { data, filter } = useSelector((state: any) => state.projects);

  const getProjects = data.map((p: any, i: number) => (
    <UpcomingPanel key={i} project={p} />
  ));
  useEffect(() => {
    document.title = 'Dashboard | KUPM';
    dispatch(fetchNotifications());
    dispatch(fetchTodo());
    dispatch(fetchAllProjects());
  }, []);

  /** @todo consider react-window to support large amounts or data */
  const getNotifications = notifications.map((n: any) => (
    <NotificationPanel data={n} />
  ));

  const getTodo = todo.map((data: any) => <TodoPanel data={data} />);

  return (
    <Layout>
      <SideBar activePage="dashboard" />
      {/**@todo replace with context */}
      <NavBar pageName="Dashboard" />
      <Content>
        <Panel heading="Recent Notifications">{getNotifications}</Panel>
        {/**@todo replace style attribute */}
        <Panel heading="Todo" style={{ gridRow: 'span 2' }}>
          {getTodo}
        </Panel>

        <Panel heading="Upcoming Projects">{getProjects}</Panel>
      </Content>
    </Layout>
  );
};

export default Dashboard;
