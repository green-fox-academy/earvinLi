// Internal Dependencies
import {
  COUNTER_DECREASE,
  COUNTER_INCREASE,
  COUNTER_RESET,
  COUNTER_SET,
} from '../App/ActionTypes';

const INITIAL_STATE = {
  counter: 0,
};

const countReducer = (state = INITIAL_STATE, action) => {
  const { counter } = state;
  const {
    type,
    amount,
  } = action;

  switch (type) {
    case COUNTER_DECREASE: return { ...state, counter: counter - (amount || 1)};
    case COUNTER_INCREASE: return { ...state, counter: counter + (amount || 1)};
    case COUNTER_RESET: return { ...state, counter: 0};
    case COUNTER_SET: return { ...state, counter: amount};
    default: return state;
  }
}

export default countReducer;
