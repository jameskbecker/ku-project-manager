import Global from '@/components/global/Global';
import Dashboard from '@/components/pages/dashboard/Dashboard';
import Forgot from '@/components/pages/forgot/Forgot';
import Login from '@/components/pages/login/Login';
import ProjectOverview from '@/components/pages/projects/Projects';
import Register from '@/components/pages/register/Register';
import Settings from '@/components/pages/settings/Settings';
import Project from '@/components/pages/tasks/Tasks';
import light, { dark } from '@/theme';
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
