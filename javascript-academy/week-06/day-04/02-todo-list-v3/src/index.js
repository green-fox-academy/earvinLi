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
import Todo from './Todo';
import TodoReducer from './Todo/reducer';

const store = createStore(TodoReducer, applyMiddleware(ReduxThunk));
ReactDOM.render((
  <Provider store={store}>
    <Todo />
  </Provider>
), document.getElementById('root'));
