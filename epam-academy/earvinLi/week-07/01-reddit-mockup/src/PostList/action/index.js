// Internal Dependencies
// import { createActionCreator } from '../../App/RootUtilities';
import {
  ADD_POST,
  FETCH_POSTS,
} from '../../App/ActionTypes';

export const fetchPosts = () => async (dispatch) => {
  const fetchedPostsJSON = await fetch('http://localhost:8081/posts');
  const fetchedPosts = await fetchedPostsJSON.json();

  dispatch({ type: FETCH_POSTS, fetchedPosts });
};

export const addPost = (post) => async (dispatch) => {
  const postedPostJSON = await fetch('http://localhost:8081/posts', {
    body: JSON.stringify(post),
    method: 'POST',
    headers: { 'content-type': 'application/json' },
  });
  const postedPost = await postedPostJSON.json();

  dispatch({ type: ADD_POST, postedPost });
};
