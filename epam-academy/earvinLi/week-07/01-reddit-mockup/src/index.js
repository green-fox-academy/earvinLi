// External Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import ReduxThunk from 'redux-thunk';
import {
  compose,
  createStore,
  applyMiddleware,
} from 'redux';
import { Provider } from 'react-redux';

// Material-UI Dependencies
import {
  createMuiTheme,
  MuiThemeProvider,
} from '@material-ui/core/styles';

// Internal Dependencies
import App from './App/App';
import AppReducer from './App/AppReducer';

// Redux Configuration
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const appStore = createStore(AppReducer, composeEnhancers(applyMiddleware(ReduxThunk)));

// Material-UI theme Configuration
const theme = createMuiTheme({
  palette: {
    primary: {
      contrastText: '#fff',
      main: '#4AA3DF',
    },
  },
});

ReactDOM.render((
  <Provider store={appStore}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>
), document.getElementById('root'));
