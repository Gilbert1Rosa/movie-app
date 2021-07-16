import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import movieStore from './state/Store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={movieStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
