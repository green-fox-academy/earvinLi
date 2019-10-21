// External Dependencies
import React, { useState } from 'react';
import { connect } from 'react-redux';

// Internal Dependencies
import {
  decreaseCounter,
  increaseCounter,
  resetCounter,
  setCounter,
} from './CounterAction';

// Component Definition
function CounterSection(props) {
  const [inputCounter, setInputCounter] = useState(0);

  const {
    counter,
    onDecreaseCounter,
    onIncreaseCounter,
    onResetCounter,
    onSetCounter,
  } = props;

  return (
    <div style={{ display: 'flex' }}>

      <div>
        <h1>The Increaser</h1>
        <h4>{counter}</h4>
        <button onClick={() => onIncreaseCounter(1)}>Increase</button>
      </div>

      <div>
        <h1>The Decreaser</h1>
        <h4>{counter}</h4>
        <button onClick={() => onDecreaseCounter(1)}>Decrease</button>
      </div>

      <div>
        <h1>The Resetter</h1>
        <button onClick={() => onResetCounter()}>Reset</button>
      </div>

      <div>
        <h1>The Setter</h1>
        <h4>{counter}</h4>
        <input
          onChange={(event) => setInputCounter(event.target.value)}
          value={inputCounter}
        />
      <button onClick={() => onSetCounter(inputCounter)}>Set</button>
      </div>

    </div>
  );
}

const mapStateToProps = (state) => ({
  counter: state.CounterSection.counter,
});

const mapDispatchToProps = (dispatch) => ({
  onDecreaseCounter: (amount) => dispatch(decreaseCounter(amount)),
  onIncreaseCounter: (amount) => dispatch(increaseCounter(amount)),
  onResetCounter: () => dispatch(resetCounter()),
  onSetCounter: (amount) => dispatch(setCounter(amount)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterSection);
