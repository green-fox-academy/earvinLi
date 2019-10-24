// Internal Dependencies
import { createReducer } from '../../App/RootUtilities';
import {
  MESSAGE_FETCH_SUCCEED,
  MESSAGE_POST_SUCCEED,
} from '../../App/ActionTypes';

const INITIAL_STATE = {
  message: {},
  postedMessage: {},
};

const fetchMessageSucceed = (state, action) => ({ ...state, message: action.message });
const postMessageSucceed = (state, action) => ({ ...state, postedMessage: action.message });

export default createReducer(INITIAL_STATE, {
  [MESSAGE_FETCH_SUCCEED]: fetchMessageSucceed,
  [MESSAGE_POST_SUCCEED]: postMessageSucceed,
});
