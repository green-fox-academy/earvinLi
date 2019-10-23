// Internal Dependencies
import { MESSAGE_FETCH_SUCCEED } from '../../App/ActionTypes';

const INITIAL_STATE = {
  message: {},
};

const AppReducer = (state = INITIAL_STATE, action) => {
  if (action.type === MESSAGE_FETCH_SUCCEED) return { ...state, message: action.message }
  return state;
};

export default AppReducer;
