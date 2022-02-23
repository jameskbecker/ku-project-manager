import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import configureStore from '../store/configureStore';
import Global from './global/Global';
import Dashboard from './pages/dashboard/Dashboard';
import ProjectOverview from './pages/projects/Projects';
import Project from './pages/tasks/Tasks';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';

const App = () => {
  return (
    <Provider store={configureStore}>
      <Global />
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />

          <Route exact path="/" component={Dashboard} />
          <Route exact path="/projects" component={ProjectOverview}></Route>
          <Route exact path="/projects/:id" component={Project} />
          <Route exact path="/projects/:id/:taskId" component={Project} />
          <Route exact path="/settings" component={Settings} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
