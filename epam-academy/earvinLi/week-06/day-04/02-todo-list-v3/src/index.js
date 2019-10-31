// External Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import ReduxThunk from 'redux-thunk';
import {
  applyMiddleware,
  createStore,
} from 'redux';
import { Provider } from 'react-redux';

// Internal Dependencies
import App from './components/App';
import AppReducer from './components/reducer';

const store = createStore(AppReducer, applyMiddleware(ReduxThunk));
ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));
