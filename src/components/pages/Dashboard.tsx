import React, { useState } from 'react';
import { CSSObject } from 'styled-components';
import assignments from '../../mock-data/assignment';
import comments from '../../mock-data/comment';
import users from '../../mock-data/person';
import todo from '../../mock-data/todo';
import Content from '../global/Content';
import Panel from '../global/Panel';
import Footer from '../layout/Footer';
import Layout from '../layout/Layout';
import NavBar, { UserModal } from '../layout/NavBar';
import SideBar from '../layout/SideBar';

const Dashboard = () => {
  const [showUserModal, setShowUserModal] = useState(false);

  const toggleUserModal = () => {
    setShowUserModal(!showUserModal);
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

  const getUpcoming = assignments.map((a) => (
    <Panel secondary heading={a.name} key={a.id}>
      <div>{new Date(a.dueDate).toLocaleString()}</div>
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
      <SideBar />
      {/**@todo replace with context */}
      <NavBar pageName="Dashboard" toggleUserModal={toggleUserModal} />
      <Content onClick={() => setShowUserModal(false)}>
        <Panel heading="Recent Notifications">{getNotifications}</Panel>
        {/**@todo replace style attribute */}
        <Panel heading="Todo" style={{ gridRow: 'span 2' }}>
          {getTodo}
        </Panel>
        <Panel heading="Upcoming Projects">{getUpcoming}</Panel>
        {/* Consider making calendar its own page to prevent long mobile page */}
        {/* <Panel heading="Calendar">_</Panel> */}
      </Content>
      <Footer />
      {showUserModal && <UserModal />}
    </Layout>
  );
};

export default Dashboard;
