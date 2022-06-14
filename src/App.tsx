import Global from '@kupm/common/Global';
import Dashboard from '@kupm/pages/Dashboard';
import Forgot from '@kupm/pages/Forgot';
import Login from '@kupm/pages/Login';
import MyProjects from '@kupm/pages/MyProjects';
import OtherProjects from '@kupm/pages/OtherProjects';
import ProjectDetails from '@kupm/pages/ProjectDetails';
import Register from '@kupm/pages/Register';
import Settings from '@kupm/pages/Settings';
import Tasks from '@kupm/pages/Tasks';
import light, { dark } from '@kupm/theme';
import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

const App = () => {
  const { theme } = useSelector((state: any) => state.appearancePanel);
  return (
    <ThemeProvider theme={theme === 'dark' ? dark : light}>
      <Global />
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/forgot" component={Forgot} />

          <Route exact path="/" component={Dashboard} />
          <Route exact path="/projects" component={MyProjects} />
          <Route exact path="/projects/:id" component={ProjectDetails} />
          <Route exact path="/projects/:id/:taskId" component={Tasks} />
          <Route exact path="/shared" component={OtherProjects} />
          <Route exact path="/settings" component={Settings} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
