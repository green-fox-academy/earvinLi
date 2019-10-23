// Internal Dependencies
import { createReducer } from '../../App/RootUtilities';
import { MESSAGE_FETCH_SUCCEED } from '../../App/ActionTypes';

const INITIAL_STATE = {
  message: {},
};

const fetchMessageSucceed = (state, action) => ({ ...state, message: action.message });

export default createReducer(INITIAL_STATE, {
  [MESSAGE_FETCH_SUCCEED]: fetchMessageSucceed,
});
