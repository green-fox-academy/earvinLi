// External Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import ReduxThunk from 'redux-thunk';
import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux';
import { Provider } from 'react-redux';

// Internal Dependencies
import App from './App';
import AppReducer from './App/AppReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const appStore = createStore(AppReducer, composeEnhancers(applyMiddleware(ReduxThunk)));

ReactDOM.render((
  <Provider store={appStore}>
    <App />
  </Provider>
), document.getElementById('root'));
