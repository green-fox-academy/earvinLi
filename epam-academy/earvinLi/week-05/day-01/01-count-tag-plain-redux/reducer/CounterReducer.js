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
    case 'DECREASE': return { ...state, counter: counter - (amount || 1)};
    case 'INCREASE': return { ...state, counter: counter + (amount || 1)};
    case 'RESET': return { ...state, counter: 0};
    case 'SET': return { ...state, counter: amount};
    default: return state;
  }
}

module.exports = countReducer;
