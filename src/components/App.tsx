import Global from '@kupm/components/common/Global';
import Dashboard from '@kupm/components/dashboard/Dashboard';
import Forgot from '@kupm/components/forgot/Forgot';
import Login from '@kupm/components/login/Login';
import ProjectOverview from '@kupm/components/projects/Projects';
import Register from '@kupm/components/register/Register';
import Settings from '@kupm/components/settings/Settings';
import Project from '@kupm/components/tasks/Tasks';
import light, { dark } from '@kupm/theme';
import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

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
