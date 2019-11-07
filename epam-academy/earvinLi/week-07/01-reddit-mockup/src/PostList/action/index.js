// Internal Dependencies
import {
  ADD_POST,
  DELETE_POST,
  EDIT_POSTS,
  FETCH_POSTS,
  VOTE_POST,
} from '../../App/ActionTypes';

// TODO: Create helper functions to simplify the following fetches
export const addPost = (post) => async (dispatch) => {
  const postedPostJSON = await fetch('http://localhost:8081/posts', {
    body: JSON.stringify(post),
    method: 'POST',
    headers: { 'content-type': 'application/json' },
  });
  const postedPost = await postedPostJSON.json();

  dispatch({ type: ADD_POST, postedPost });
};

export const deletePost = (postId) => async (dispatch) => {
  const deletedPostJSON = await fetch(`http://localhost:8081/posts/${postId}`, {
    method: 'DELETE',
    headers: { 'content-type': 'application/json' },
  });
  const deletedPost = await deletedPostJSON.json();

  dispatch({ type: DELETE_POST, deletedPost });
};

export const editPost = (post, postId) => async (dispatch) => {
  const editedPostJSON = await fetch(`http://localhost:8081/posts/${postId}`, {
    body: JSON.stringify(post),
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
  });
  const editedPost = await editedPostJSON.json();

  dispatch({ type: EDIT_POSTS, editedPost });
};

export const fetchPosts = () => async (dispatch) => {
  const fetchedPostsJSON = await fetch('http://localhost:8081/posts');
  const fetchedPosts = await fetchedPostsJSON.json();

  dispatch({ type: FETCH_POSTS, fetchedPosts });
};

export const votePost = (postId, opinion) => async (dispatch) => {
  const votePostURL = `http://localhost:8081/posts/${postId}?opinion=${opinion}`;
  const votedPostJSON = await fetch(votePostURL, {
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
  });
  const votedPost = await votedPostJSON.json();

  dispatch({ type: VOTE_POST, votedPost });
};
