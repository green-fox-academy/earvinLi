// Internal Dependencies
import { createReducer } from '../../App/RootUtilities';
import {
  ADD_POST,
  FETCH_POSTS,
} from '../../App/ActionTypes';

const INITIAL_STATE = {
  postedPost: {},
  posts: [],
};

const addPost = (state, action) => ({
  ...state,
  postedPost: action.postedPost,
});

const fetchPosts = (state, action) => ({
  ...state,
  posts: action.fetchedPosts,
});

export default createReducer(INITIAL_STATE, {
  [ADD_POST]: addPost,
  [FETCH_POSTS]: fetchPosts,
});
