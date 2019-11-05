// Internal Dependencies
// import { createActionCreator } from '../../App/RootUtilities';
import { FETCH_POSTS } from '../../App/ActionTypes';

export const fetchPosts = () => async (dispatch) => {
  const fetchedPostsJSON = await fetch('http://localhost:8081/posts');
  const fetchedPosts = await fetchedPostsJSON.json();

  dispatch({ type: FETCH_POSTS, fetchedPosts });
};
