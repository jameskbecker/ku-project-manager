import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Global from './global/Global';
import Dashboard from './pages/dashboard/Dashboard';
import ProjectOverview from './pages/project-overview/ProjectOverview';
import Project from './pages/project/Project';
import Settings from './pages/settings/Settings';

const App = () => {
  return (
    <>
      <Global />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/projects" component={ProjectOverview}></Route>
          <Route exact path="/projects/:id" component={Project} />
          <Route exact path="/settings" component={Settings} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
