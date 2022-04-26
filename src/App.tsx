import Global from '@kupm/common/Global';
import Dashboard from '@kupm/pages/Dashboard';
import Forgot from '@kupm/pages/Forgot';
import Login from '@kupm/pages/Login';
import ProjectOverview from '@kupm/pages/Projects';
import Register from '@kupm/pages/Register';
import Settings from '@kupm/pages/Settings';
import Project from '@kupm/pages/Tasks';
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
