import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import configureStore from '../store/configureStore';
import Global from './global/Global';
import Dashboard from './pages/dashboard/Dashboard';
import ProjectOverview from './pages/project-overview/ProjectOverview';
import Project from './pages/project/Project';
import Settings from './pages/settings/Settings';

const App = () => {
  return (
    <Provider store={configureStore}>
      <Global />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/projects" component={ProjectOverview}></Route>
          <Route exact path="/projects/:id" component={Project} />
          <Route exact path="/settings" component={Settings} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
