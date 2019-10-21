// External Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Internal Dependencies
import App from './App';
import AppReducer from './App/AppReducer';

ReactDOM.render((
  <Provider store={createStore(AppReducer)}>
    <App />
  </Provider>
), document.getElementById('root'));
