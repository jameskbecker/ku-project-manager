import React from 'react';
import Content from '../global/Content';
import Panel from '../global/Panel';
import Footer from './Footer';
import NavBar from './NavBar';

const PanelPlaceholder = () => {
  return (
    <Panel>
      <div>Title</div>
      <ul>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dui.
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dui.
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dui.
        </li>
      </ul>
    </Panel>
  );
};

const Layout = () => {
  return (
    <>
      <NavBar />
      <h1>Dashboard</h1>
      <Content>
        <PanelPlaceholder />
        <PanelPlaceholder />
        <PanelPlaceholder />
        <PanelPlaceholder />
      </Content>
      <Footer />
    </>
  );
};

export default Layout;
