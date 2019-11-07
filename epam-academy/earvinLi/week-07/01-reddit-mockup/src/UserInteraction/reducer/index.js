// External Dependencies
import { combineReducers } from 'redux';

// Internal Dependencies
import PostAddEditDialogReducer from './PostAddEditDialogReducer';

export default combineReducers({
  PostAddEditDialog: PostAddEditDialogReducer,
});
