// Internal Dependencies
import { createReducer } from '../../App/RootUtilities';
import {
  ADD_POST,
  FETCH_POSTS,
  VOTE_POST,
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

const votePost = (state, action) => ({
  ...state,
  postedPost: action.postedPost,
});

export default createReducer(INITIAL_STATE, {
  [ADD_POST]: addPost,
  [FETCH_POSTS]: fetchPosts,
  [VOTE_POST]: votePost,
});
