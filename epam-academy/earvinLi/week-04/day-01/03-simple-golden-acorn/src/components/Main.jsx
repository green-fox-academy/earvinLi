// External Dependencies
import React, { Component } from 'react';

// Internal Dependencies
import Button from './Button';
import Display from './Display';

// Component Definition
class Main extends Component {
  constructor() {
    super();
    this.state = { acornCount: 0 };
    this.buyAcorn = this.buyAcorn.bind(this);
    this.eatAcorn = this.eatAcorn.bind(this);
  }

  buyAcorn() {
    return this.setState({ acornCount: this.state.acornCount + 1 });
  }

  eatAcorn() {
    const { acornCount } = this.state;
    if (acornCount) return this.setState({ acornCount: acornCount - 1 });
  }

  render() {
    const { acornCount } = this.state;

    return (
      <div>
        <Button
          func={this.buyAcorn}
          text='Buy One'
        />
        <Display>
          <p>{acornCount}</p>
        </Display>
        <Button
          func={this.eatAcorn}
          text='Eat One'
          disabled={!acornCount}
        />
      </div>
    );
  }
}

export default Main;
