// External Dependencies
import { combineReducers } from 'redux';

// Internal Dependencies
import MessageReducer from '../Message/reducer';

export default combineReducers({
  Message: MessageReducer,
});
