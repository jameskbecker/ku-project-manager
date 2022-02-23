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

const Dashboard = () => {
  const history = useHistory();

  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();
  const { isLoading, data, filter } = useSelector(
    (state: any) => state.projects
  );

  const filteredData = data.filter(
    (t: any) =>
      t.name?.toLowerCase().includes(filter.toLowerCase()) ||
      // t.dueAt ?.toLowerCase().includes(filter.toLowerCase()) ||
      t.description?.toLowerCase().includes(filter.toLowerCase())
  );

  const getProjects = filteredData.map((p: any, i: number) => (
    <UpcomingPanel key={i} project={p} />
  ));
  useEffect(() => {
    dispatch(fetchAllProjects());
  }, []);

  const loadProjectData = async () => {
    try {
      const resp = await window.fetch(
        '/local/api/projects'
        //'https://kupm-api.herokuapp.com/api/projects'
      );
      const body = await resp.json();
      if (body.error) return;
      // setProjects(body.data);
      setIsLoaded(true);
    } catch (e) {}
  };

  const selectProjectHandler = (id: string) => {
    history.push(`/projects/${id}`);
  };

  /** @todo consider react-window to support large amounts or data */
  const getNotifications = comments.map((comment) =>
    NotificationPanel({ comment })
  );

  const getTodo = todo.map((todo) => TodoPanel({ todo }));

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
