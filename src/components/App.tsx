import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Global from './global/Global';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';

const App = () => {
  return (
    <>
      <Global />
      <BrowserRouter>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/projects" component={Projects} />
      </BrowserRouter>
    </>
  );
};

export default App;
