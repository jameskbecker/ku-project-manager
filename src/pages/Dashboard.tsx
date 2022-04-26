import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { SecondaryButton } from '@kupm/common/Button';
import NavBar from '@kupm/common/layout/HeaderBar';
import Layout from '@kupm/common/layout/Layout';
import SideBar from '@kupm/common/layout/SideBar';
import Panel from '@kupm/common/Panel';
import ScrollContainer from '@kupm/common/ScrollContainer';
import { useGetProjectsQuery } from '@kupm/features/api/apiSlice';
import Content from '@kupm/features/dashboard/Content';
import {
  fetchNotifications,
  fetchTodo,
} from '@kupm/features/dashboard/dashboardSlice';
import NotificationPanel from '@kupm/features/dashboard/NotificationPanel';
import TodoPanel from '@kupm/features/dashboard/TodoPanel';
import UpcomingPanel from '@kupm/features/dashboard/UpcomingPanel';
import { fetchAccountDetails } from '@kupm/features/settings/settingsSlice';
import { getCookie } from '@kupm/utils/cookie';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const DataPlaceholder = styled.div`
  flex: 1 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Dashboard = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { notifications, todo } = useSelector((state: any) => state.dashboard);
  const { filter } = useSelector((state: any) => state.projects);

  const { data: projects, refetch: refetchProjects } =
    useGetProjectsQuery(null);

  useEffect(() => {
    if (!getCookie('kupm_user_id')) {
      history.push('/login');
      return;
    }
    document.title = 'Dashboard | KUPM';
    dispatch(fetchAccountDetails());
    dispatch(fetchNotifications());
    dispatch(fetchTodo());
  }, []);

  const handleNotificationRefresh = () => {
    dispatch(fetchNotifications());
  };

  const handleTodoRefresh = () => {
    dispatch(fetchTodo());
  };

  /** @todo consider react-window to support large amounts or data */
  const Notifications = () => {
    return (
      <Panel
        heading="Recent Notifications"
        Options={
          <SecondaryButton
            secondary
            icon={faSyncAlt}
            onClick={handleNotificationRefresh}
            round
            light
          />
        }
      >
        {notifications.length < 1 ? (
          <DataPlaceholder>No Recent Notifications</DataPlaceholder>
        ) : (
          <ScrollContainer>
            {notifications.map((n: any, i: number) => (
              <NotificationPanel key={i} data={n} />
            ))}
          </ScrollContainer>
        )}
      </Panel>
    );
  };

  const UpcomingProjects = () => {
    return (
      <Panel
        heading="Upcoming Projects"
        Options={
          <SecondaryButton
            secondary
            icon={faSyncAlt}
            onClick={refetchProjects}
            round
            light
          />
        }
      >
        {projects?.data.length < 1 ? (
          <DataPlaceholder>No Upcoming Projects</DataPlaceholder>
        ) : (
          <ScrollContainer>
            {projects?.data.map((p: any, i: number) => (
              <UpcomingPanel key={i} project={p} />
            ))}
          </ScrollContainer>
        )}
      </Panel>
    );
  };

  const Todos = () => {
    return (
      <Panel
        heading="Tasks Todo"
        style={{ gridRow: 'span 2' }}
        Options={
          <SecondaryButton
            secondary
            icon={faSyncAlt}
            onClick={handleTodoRefresh}
            round
            light
          />
        }
      >
        {todo.length < 1 ? (
          <DataPlaceholder>No Tasks</DataPlaceholder>
        ) : (
          <ScrollContainer>
            {todo.map((data: any) => (
              <TodoPanel key={data.id} data={data} />
            ))}
          </ScrollContainer>
        )}
      </Panel>
    );
  };

  return (
    <Layout>
      <SideBar activePage="dashboard" />
      {/**@todo replace with context */}
      <NavBar pageName="Dashboard" />
      <Content>
        <Todos />
        <Notifications />
        {/**@todo replace style attribute */}

        <UpcomingProjects />
      </Content>
    </Layout>
  );
};

export default Dashboard;