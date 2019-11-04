// External Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import ReduxThunk from 'redux-thunk';
import {
  createStore,
  applyMiddleware,
} from 'redux';
import { Provider } from 'react-redux';

// Internal Dependencies
import App from './App';
import AppReducer from './App/AppReducer';

const appStore = createStore(AppReducer, applyMiddleware(ReduxThunk));
ReactDOM.render((
  <Provider store={appStore}>
    <App />
  </Provider>
), document.getElementById('root'));
