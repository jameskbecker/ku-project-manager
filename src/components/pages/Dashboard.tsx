import React from 'react';
import Content from '../global/Content';
import Panel from '../global/Panel';
import Footer from '../layout/Footer';
import NavBar from '../layout/NavBar';
import assignments from '../../mock-data/assignments';
import todo from '../../mock-data/todo';

const Layout = () => {
  /** @todo consider react-window to support large amounts or data */
  const getUpcoming = assignments.map((a) => (
    <li key={a.id}>
      <h4>{a.name}</h4>
      <div>{new Date(a.dueDate).toLocaleString()}</div>
    </li>
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
    <>
      <NavBar />
      <h2>Dashboard</h2>
      <Content>
        <Panel heading="Recent Notifications">f</Panel>
        <Panel heading="Upcoming assignments">{getUpcoming}</Panel>
        <Panel heading="Todo">{getTodo}</Panel>
        {/* Consider making calendar its own page to prevent long mobile page */}
        {/* <Panel heading="Calendar">_</Panel> */}
      </Content>
      <Footer />
    </>
  );
};

export default Layout;
