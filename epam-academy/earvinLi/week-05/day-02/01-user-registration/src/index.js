// External Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Internal Dependencies
import SignUpFormReducer from './SignUpForm/reducer';
import SignUpForm from './SignUpForm';

ReactDOM.render((
  <Provider store={createStore(SignUpFormReducer)}>
    <SignUpForm />
  </Provider>
), document.getElementById('root'));
