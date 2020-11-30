// External Dependencies
import React, { Component } from 'react';

// Component Definition
class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    console.log('Did Mount!');
    document.title = `You clicked ${this.state.count} times`;
  }

  componentDidUpdate() {
    console.log('Did Update!');
    document.title = `You clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

export default Example;
