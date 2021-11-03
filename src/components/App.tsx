import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Global from './global/Global';
import Dashboard from './pages/Dashboard';
import Project from './pages/Project';
import ProjectOverview from './pages/ProjectOverview';
import Settings from './pages/Settings';

const App = () => {
  return (
    <>
      <Global />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/projects" component={ProjectOverview} />
          <Route exact path="/projects/:id" component={Project} />
          <Route exact path="/settings" component={Settings} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
