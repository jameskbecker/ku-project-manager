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

const Dashboard = () => {
  const history = useHistory();
  const [projects, setProjects] = useState<Project[]>();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    loadProjectData();
  }, []);

  const loadProjectData = async () => {
    try {
      const resp = await window.fetch(
        '/local/api/projects'
        //'https://kupm-api.herokuapp.com/api/projects'
      );
      const body = await resp.json();
      if (body.error) return;
      setProjects(body.data);
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

  const getUpcoming = projects?.map((project) =>
    UpcomingPanel({ project, selectProjectHandler })
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

        <Panel heading="Upcoming Projects">
          {isLoaded ? getUpcoming : <FontAwesomeIcon icon={faSpinner} spin />}
        </Panel>
      </Content>
      <Footer />
    </Layout>
  );
};

export default Dashboard;
