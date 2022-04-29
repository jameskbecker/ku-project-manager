import { FlexColumn } from '@kupm/common/Flex';
import NavBar from '@kupm/common/layout/HeaderBar';
import Layout from '@kupm/common/layout/Layout';
import NotificationPanel from '@kupm/features/notificationPanel/NotificationPanel';
import ProjectPanel from '@kupm/features/projectPanel/ProjectPanel';
import Sidebar from '@kupm/features/sidebar/Sidebar';
import { setActivePage } from '@kupm/features/sidebar/sidebarSlice';
import TodoPanel from '@kupm/features/todoPanel/TodoPanel';
import { getCookie } from '@kupm/utils/cookie';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

/** @todo optimise large scale displays */
const DashboardContent = styled(FlexColumn)`
  grid-area: content;
  grid-row: 2 / span 3;

  padding: 1rem;

  /** Tablet  */
  @media screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }

  /** Desktop  */
`;

const Dashboard = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!getCookie('kupm_user_id')) {
      history.push('/login');
      return;
    }
    document.title = 'Dashboard | KUPM';
    dispatch(setActivePage('dashboard'));
  }, []);

  /** @todo consider react-window to support large amounts or data */

  return (
    <Layout>
      <Sidebar />
      {/**@todo replace with context */}
      <NavBar pageName="Dashboard" />
      <DashboardContent>
        <TodoPanel />
        <NotificationPanel />
        <ProjectPanel />
      </DashboardContent>
    </Layout>
  );
};

export default Dashboard;
