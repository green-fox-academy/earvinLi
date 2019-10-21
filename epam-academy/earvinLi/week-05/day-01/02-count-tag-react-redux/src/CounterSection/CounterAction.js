// Internal Dependencies
import {
  COUNTER_DECREASE,
  COUNTER_INCREASE,
  COUNTER_RESET,
  COUNTER_SET,
} from '../App/ActionTypes';

export const decreaseCounter = (amount = 0) => ({
  type: COUNTER_DECREASE,
  amount,
});

export const increaseCounter = (amount = 0) => ({
  type: COUNTER_INCREASE,
  amount,
});

export const resetCounter = (amount = 0) => ({ type: COUNTER_RESET });

export const setCounter = (amount = 0) => ({
  type: COUNTER_SET,
  amount,
});
