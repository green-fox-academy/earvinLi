// External Dependencies
import { combineReducers } from 'redux';

// Internal Dependencies
import CounterReducer from '../CounterSection/CounterReducer';
import TagReducer from '../TagSection/TagReducer';

export default combineReducers({
  CounterSection: CounterReducer,
  TagSection: TagReducer,
});
