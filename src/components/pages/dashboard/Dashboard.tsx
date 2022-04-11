import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchNotifications, fetchTodo } from '../../../store/dashboard';
import { fetchAllProjects } from '../../../store/projects';
import { SecondaryButton } from '../../global/Button';
import Panel from '../../global/Panel';
import ScrollContainer from '../../global/ScrollContainer';
import NavBar from '../../layout/HeaderBar';
import Layout from '../../layout/Layout';
import SideBar from '../../layout/SideBar';
import Content from './Content';
import NotificationPanel from './NotificationPanel';
import TodoPanel from './TodoPanel';
import UpcomingPanel from './UpcomingPanel';

const DataPlaceholder = styled.div`
  flex: 1 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Dashboard = () => {
  const dispatch = useDispatch();
  const { notifications, todo } = useSelector((state: any) => state.dashboard);
  const { data, filter } = useSelector((state: any) => state.projects);

  useEffect(() => {
    document.title = 'Dashboard | KUPM';
    dispatch(fetchNotifications());
    dispatch(fetchTodo());
    dispatch(fetchAllProjects());
  }, []);

  /** @todo consider react-window to support large amounts or data */
  const Notifications = () => {
    return (
      <Panel
        heading="Recent Notifications"
        Options={
          <SecondaryButton
            secondary
            icon={faSyncAlt}
            onClick={null}
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
            onClick={null}
            round
            light
          />
        }
      >
        {data.length < 1 ? (
          <DataPlaceholder>No Upcoming Projects</DataPlaceholder>
        ) : (
          <ScrollContainer>
            {data.map((p: any, i: number) => (
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
        heading="Todo"
        style={{ gridRow: 'span 2' }}
        Options={
          <SecondaryButton
            secondary
            icon={faSyncAlt}
            onClick={null}
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
              <TodoPanel data={data} />
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
        <Notifications />
        {/**@todo replace style attribute */}
        <Todos />

        <UpcomingProjects />
      </Content>
    </Layout>
  );
};

export default Dashboard;
