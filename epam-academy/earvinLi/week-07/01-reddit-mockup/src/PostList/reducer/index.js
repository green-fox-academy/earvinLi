// Internal Dependencies
import { createReducer } from '../../App/RootUtilities';
import {
  ADD_POST,
  DELETE_POST,
  EDIT_POSTS,
  FETCH_POSTS,
  VOTE_POST,
} from '../../App/ActionTypes';

const INITIAL_STATE = {
  deletedPost: {},
  editedPost: {},
  postedPost: {},
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

const editPost = (state, action) => ({
  ...state,
  editedPost: action.editedPost,
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
  [EDIT_POSTS]: editPost,
  [FETCH_POSTS]: fetchPosts,
  [VOTE_POST]: votePost,
});
