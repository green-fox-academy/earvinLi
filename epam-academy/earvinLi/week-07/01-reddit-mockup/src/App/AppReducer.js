// External Dependencies
import { combineReducers } from 'redux';

// Internal Dependencies
import PostListReducer from '../PostList/reducer';

export default combineReducers({
  PostList: PostListReducer,
});
