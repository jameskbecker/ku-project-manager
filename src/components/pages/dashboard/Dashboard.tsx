import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { CSSObject } from 'styled-components';
import assignments from '../../../mock-data/assignment';
import comments from '../../../mock-data/comment';
import users from '../../../mock-data/person';
import todo from '../../../mock-data/todo';
import Content from '../../global/Content';
import Panel from '../../global/Panel';
import Footer from '../../layout/Footer';
import Layout from '../../layout/Layout';
import NavBar, { UserModal } from '../../layout/NavBar';
import SideBar from '../../layout/SideBar';
import Project from '../project/Project';

const Dashboard = () => {
  const history = useHistory();
  const [showUserModal, setShowUserModal] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const toggleUserModal = () => {
    setShowUserModal(!showUserModal);
  };

  const [projects, setProjects] = useState<Project[]>();

  useEffect(() => {
    loadProjectData();
  }, []);

  const loadProjectData = async () => {
    try {
      const resp = await window.fetch('/api/projects');
      const body = await resp.json();
      if (body.error) return;
      setProjects(body);
      setIsLoaded(true);
    } catch (e) {}
  };

  /** @todo consider react-window to support large amounts or data */
  const getNotifications = comments.map((c) => {
    const [sender] = users.filter((u) => u.id === c.senderId);
    return (
      <Panel
        secondary
        heading={`New Comment from ${sender.lastName}, ${sender.firstName}`}
        key={c.id}
      >
        <div>{new Date(c.sendTime).toLocaleDateString()}</div>
        <div>
          {c.details.length >= 50 ? `${c.details.slice(0, 50)}...` : c.details}
        </div>
      </Panel>
    );
  });

  const selectProjectHandler = (id: string) => {
    history.push(`/projects/${id}`);
  };

  const getUpcoming = projects?.map((p) => (
    <Panel
      secondary
      heading={p.name}
      key={p.id}
      onClick={() => selectProjectHandler(p.id)}
    >
      <div>{new Date(p.timeCreated).toLocaleString()}</div>
    </Panel>
  ));

  const getTodo = todo.map((t) => {
    const [assignment] = assignments.filter((a) => a.id === t.id);
    return (
      <Panel secondary heading={t.name} key={t.id}>
        <div>{assignment.name}</div>
      </Panel>
    );
  });

  return (
    <Layout>
      <SideBar activePage="dashboard" />
      {/**@todo replace with context */}
      <NavBar pageName="Dashboard" toggleUserModal={toggleUserModal} />
      <Content onClick={() => setShowUserModal(false)}>
        <Panel heading="Recent Notifications">{getNotifications}</Panel>
        {/**@todo replace style attribute */}
        <Panel heading="Todo" style={{ gridRow: 'span 2' }}>
          {getTodo}
        </Panel>

        <Panel heading="Upcoming Projects">
          {isLoaded ? getUpcoming : <FontAwesomeIcon icon={faSpinner} spin />}
        </Panel>
        {/* Consider making calendar its own page to prevent long mobile page */}
        {/* <Panel heading="Calendar">_</Panel> */}
      </Content>
      <Footer />
      {showUserModal && <UserModal />}
    </Layout>
  );
};

export default Dashboard;
