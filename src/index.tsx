import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from '@kupm/App';
import configureStore from '@kupm/store/configureStore';

const Root = () => (
  <Provider store={configureStore}>
    <App />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
