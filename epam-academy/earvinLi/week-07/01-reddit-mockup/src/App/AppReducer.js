// External Dependencies
import { combineReducers } from 'redux';

// Internal Dependencies
import PostListReducer from '../PostList/reducer';
import UserInteractionReducer from '../UserInteraction/reducer';

export default combineReducers({
  PostList: PostListReducer,
  UserInteraction: UserInteractionReducer,
});
