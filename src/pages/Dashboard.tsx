import NavBar from '@kupm/common/layout/HeaderBar';
import Layout from '@kupm/common/layout/Layout';
import Content from '@kupm/features/dashboard/Content';
import NotificationPanel from '@kupm/features/dashboard/NotificationPanel';
import ProjectPanel from '@kupm/features/dashboard/ProjectPanel';
import TodoPanel from '@kupm/features/dashboard/TodoPanel';
import Sidebar from '@kupm/features/sidebar/Sidebar';
import { getCookie } from '@kupm/utils/cookie';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Dashboard = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (!getCookie('kupm_user_id')) {
      history.push('/login');
      return;
    }
    document.title = 'Dashboard | KUPM';
  }, []);

  /** @todo consider react-window to support large amounts or data */

  return (
    <Layout>
      <Sidebar activePage="dashboard" />
      {/**@todo replace with context */}
      <NavBar pageName="Dashboard" />
      <Content>
        <TodoPanel />
        <NotificationPanel />
        <ProjectPanel />
      </Content>
    </Layout>
  );
};

export default Dashboard;
