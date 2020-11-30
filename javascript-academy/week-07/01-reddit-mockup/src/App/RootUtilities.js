// Action Helper
// Idea from https://redux.js.org/recipes/reducing-boilerplate#generating-action-creators
export const createActionCreator = (type, ...argNames) => (...args) => {
  const action = { type };
  argNames.forEach((arg, index) => action[argNames[index]] = args[index]);
  return action;
};

// Reducer Helper
// Idea from https://redux.js.org/recipes/reducing-boilerplate#generating-reducers
export const createReducer = (initialState, handlers) => (state = initialState, action) => {
  if (handlers.hasOwnProperty(action.type)) return handlers[action.type](state, action);
  return state;
};
