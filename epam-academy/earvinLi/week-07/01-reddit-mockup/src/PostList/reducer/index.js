// Internal Dependencies
import { createReducer } from '../../App/RootUtilities';
import {
  ADD_POST,
  DELETE_POST,
  FETCH_POSTS,
  VOTE_POST,
} from '../../App/ActionTypes';

const INITIAL_STATE = {
  postedPost: {},
  deletedPost: {},
  posts: [],
  votedPost: {},
};

const addPost = (state, action) => ({
  ...state,
  postedPost: action.postedPost,
});

const deletePost = (state, action) => ({
  ...state,
  postedPost: action.deletedPost,
});

const fetchPosts = (state, action) => ({
  ...state,
  posts: action.fetchedPosts,
});

const votePost = (state, action) => ({
  ...state,
  postedPost: action.votedPost,
});

export default createReducer(INITIAL_STATE, {
  [ADD_POST]: addPost,
  [DELETE_POST]: deletePost,
  [FETCH_POSTS]: fetchPosts,
  [VOTE_POST]: votePost,
});
