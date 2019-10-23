// Reducer Wrapper
// Idea from: https://redux.js.org/recipes/reducing-boilerplate#generating-reducers
export const createReducer = (initialState, handlers) => (state = initialState, action) => {
  const hasActionType = handlers.hasOwnProperty(action.type);
  if (hasActionType) return handlers[action.type](state, action);
  return state;
};
