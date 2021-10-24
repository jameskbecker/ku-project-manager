import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Global from './global/Global';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <>
      <Global />
      <BrowserRouter>
        <Route path="/" component={Dashboard} />
      </BrowserRouter>
    </>
  );
};

export default App;
