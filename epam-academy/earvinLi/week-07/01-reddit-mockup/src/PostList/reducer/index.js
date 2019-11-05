// Internal Dependencies
import { createReducer } from '../../App/RootUtilities';
import { FETCH_POSTS } from '../../App/ActionTypes';

const INITIAL_STATE = {
  posts: [],
};

const fetchPosts = (state, action) => ({
  ...state,
  posts: action.fetchedPosts,
});

export default createReducer(INITIAL_STATE, {
  [FETCH_POSTS]: fetchPosts,
});
