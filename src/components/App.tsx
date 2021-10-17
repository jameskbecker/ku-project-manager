import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Global from './global/Global';
import Layout from './layout/Layout';

const App = () => {
  return (
    <>
      <Global />
      <BrowserRouter>
        <Route path="/" component={Layout} />
      </BrowserRouter>
    </>
  );
};

export default App;
