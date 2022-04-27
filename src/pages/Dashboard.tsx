import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { SecondaryButton } from '@kupm/common/Button';
import NavBar from '@kupm/common/layout/HeaderBar';
import Layout from '@kupm/common/layout/Layout';
import SideBar from '@kupm/common/layout/SideBar';
import Panel from '@kupm/common/Panel';
import ScrollContainer from '@kupm/common/ScrollContainer';
import {
  useGetNotificationsQuery,
  useGetProjectsQuery,
  useGetTodoQuery,
} from '@kupm/features/api/apiSlice';
import Content from '@kupm/features/dashboard/Content';
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
  const { filter } = useSelector((state: any) => state.projects);

  const { data: projects, refetch: refetchProjects } =
    useGetProjectsQuery(null);

  const {
    data: notifications,
    isLoading,
    refetch: refetchNotifications,
  } = useGetNotificationsQuery(null);
  const {
    data: todo,
    isLoading: isLoadingTodo,
    refetch: refetchTodo,
  } = useGetTodoQuery(null);

  useEffect(() => {
    if (!getCookie('kupm_user_id')) {
      history.push('/login');
      return;
    }
    document.title = 'Dashboard | KUPM';
    dispatch(fetchAccountDetails());
  }, []);

  const handleNotificationRefresh = () => {
    refetchNotifications();
  };

  const handleTodoRefresh = () => {
    refetchTodo();
  };
  /** @todo consider react-window to support large amounts or data */
  const Notifications = () => {
    let content;
    if (isLoading) content = <DataPlaceholder>Loading...</DataPlaceholder>;
    else if (notifications.data.length < 1) {
      content = <DataPlaceholder>No Recent Notifications</DataPlaceholder>;
    } else {
      content = (
        <ScrollContainer>
          {notifications.data.map((n: any, i: number) => (
            <NotificationPanel key={i} data={n} />
          ))}
        </ScrollContainer>
      );
    }
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
        {content}
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
    let content;
    if (isLoadingTodo) content = <DataPlaceholder>Loading...</DataPlaceholder>;
    else if (todo.data.length < 1) {
      content = <DataPlaceholder>No Recent Notifications</DataPlaceholder>;
    } else {
      content = (
        <ScrollContainer>
          {todo.data.map((data: any) => (
            <TodoPanel key={data.id} data={data} />
          ))}
        </ScrollContainer>
      );
    }
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
        {content}
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
