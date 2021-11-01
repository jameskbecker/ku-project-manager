import React, { useState } from 'react';
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
      <div key={c.id}>
        <h4>
          New Comment from {sender.lastName}, {sender.firstName}
        </h4>
        <div>{new Date(c.sendTime).toLocaleDateString()}</div>
        <div>
          {c.details.length >= 50 ? `${c.details.slice(0, 50)}...` : c.details}
        </div>
      </div>
    );
  });

  const getUpcoming = assignments.map((a) => (
    <div key={a.id}>
      <h4>{a.name}</h4>
      <div>{new Date(a.dueDate).toLocaleString()}</div>
    </div>
  ));

  const getTodo = todo.map((t) => {
    const [assignment] = assignments.filter((a) => a.id === t.id);
    return (
      <div key={t.id}>
        <h4>{t.name}</h4>
        <div>{assignment.name}</div>
      </div>
    );
  });

  return (
    <Layout>
      <SideBar />
      {/**@todo replace with context */}
      <NavBar toggleUserModal={toggleUserModal} />
      <Content onClick={() => setShowUserModal(false)}>
        <Panel heading="Recent Notifications">{getNotifications}</Panel>
        <Panel heading="Upcoming Projects">{getUpcoming}</Panel>
        <Panel heading="Todo">{getTodo}</Panel>
        {/* Consider making calendar its own page to prevent long mobile page */}
        {/* <Panel heading="Calendar">_</Panel> */}
      </Content>
      <Footer />
      {showUserModal && <UserModal />}
    </Layout>
  );
};

export default Dashboard;
