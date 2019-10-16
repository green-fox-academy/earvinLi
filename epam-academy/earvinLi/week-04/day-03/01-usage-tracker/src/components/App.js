// External Dependencies
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

// Internal Dependencies
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';

class App extends Component {
  constructor() {
    super();

    this.state = {
      componentOneLastMountTime: 0,
      componentTwoLastMountTime: 0,
      usages: [],
    };

    this.onAddNewMountTime = this.onAddNewMountTime.bind(this);
    this.renderTableBody = this.renderTableBody.bind(this);
  }

  onAddNewMountTime(target, mountTime) {
    const {
      componentOneLastMountTime,
      componentTwoLastMountTime,
    } = this.state;
    const lastMountTime = target === 'Component One'
      ? componentOneLastMountTime
      : componentTwoLastMountTime;
    const lastMountTimeText = target === 'Component One'
      ? 'componentOneLastMountTime'
      : 'componentTwoLastMountTime';

    const timeLasting = lastMountTime !== 0
      ? ((mountTime - lastMountTime) / 1000).toFixed(2)
      : 0;
    const newUsage = {
      target,
      timeLasting,
    };

    this.state.usages.push(newUsage);
    this.setState({
      ...this.state,
      [lastMountTimeText]: mountTime,
      usages: this.state.usages,
    });
  }

  renderTableBody() {
    return this.state.usages.map(usage => (
      <tr key={`${usage.target}${usage.timeLasting}`}>
        <td>{usage.target}</td>
        <td>{usage.timeLasting}s</td>
      </tr>
    ));
  }

  render() {
    return (
      <Router>
        <ul>
          <li><Link style={{ textDecoration: 'none', color: 'black' }} to='/componentone'>Component 1</Link></li>
          <li><Link style={{ textDecoration: 'none', color: 'black' }} to='/componenttwo'>Component 2</Link></li>
        </ul>

        <table>
          <thead>
            <tr>
              <th>Component</th>
              <th>Seconds I've been existed before a new me</th>
            </tr>
          </thead>
          <tbody>
            {this.renderTableBody()}
          </tbody>
        </table>

        <Switch>
          <Route path='/componentone'><ComponentOne addNewMountTime={this.onAddNewMountTime}/></Route>
          <Route path='/componenttwo'><ComponentTwo addNewMountTime={this.onAddNewMountTime}/></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
