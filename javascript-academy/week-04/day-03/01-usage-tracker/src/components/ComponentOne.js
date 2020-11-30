// External Dependencies
import React, { Component } from 'react';

class ComponentOne extends Component {
  componentDidMount() {
    const mountTime = Date.now();
    this.props.addNewMountTime('Component One', mountTime);
  }

  render() {
    return <p>I'm Component One!</p>;
  }
}

export default ComponentOne;
