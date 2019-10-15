// External Dependencies
import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

// Internal Dependencies
import Error from './Error';
import Home from './Home';
import PageNotFound from './PageNotFound';

// Component Definition
function App() {
  return (
    <Router>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/error'>Error</Link></li>
        <li><Link to='/somethingnotright'>Page Not Found</Link></li>
      </ul>

      <Switch>
        {/* Order matters a lot here */}
        {/* Or you need to use exact */}
        <Route exact path='/'><Home /></Route>
        <Route exact path='/error'><Error /></Route>
        <Route path='/error/:errorcode'><Error /></Route>
        <Route path='*'><PageNotFound /></Route>
      </Switch>
    </Router>
  );
}

export default App;
