// External Dependencies
import React, { Component } from 'react';

class ComponentTwo extends Component {
  componentDidMount() {
    const mountTime = Date.now();
    this.props.addNewMountTime('Component Two', mountTime);
  }

  render() {
    return <p>I'm Component Two!</p>;
  }
}

export default ComponentTwo;
