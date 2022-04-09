import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import configureStore from '../store/configureStore';
import Global from './global/Global';
import Dashboard from './pages/dashboard/Dashboard';
import ProjectOverview from './pages/projects/Projects';
import Project from './pages/tasks/Tasks';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import { ThemeProvider } from 'styled-components';
import light, { dark } from '../theme';
import Register from './pages/register/Register';
import Forgot from './pages/forgot/Forgot';

const App = () => {
  const { theme } = useSelector((state: any) => state.settings);
  return (
    <ThemeProvider theme={theme === 'dark' ? dark : light}>
      <Global />
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/forgot" component={Forgot} />

          <Route exact path="/" component={Dashboard} />
          <Route exact path="/projects" component={ProjectOverview}></Route>
          <Route exact path="/projects/:id" component={Project} />
          <Route exact path="/projects/:id/:taskId" component={Project} />
          <Route exact path="/settings" component={Settings} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
