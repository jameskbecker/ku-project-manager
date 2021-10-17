import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import Panel from '../global/Panel';

const PanelPlaceholder = () => {
  return (
    <Panel>
      <div>Title</div>
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dui.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dui.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dui.</li>
      </ul>
    </Panel>
  );
};

const Layout = () => {
  return (
    <>
      <NavBar />
      <h1>Dashboard</h1>

      <PanelPlaceholder />
      <PanelPlaceholder />
      <PanelPlaceholder />
      <PanelPlaceholder />

      <Footer />
    </>
  );
};

export default Layout;
