// Internal Dependencies
import { createActionCreator } from '../../App/RootUtilities';
import { FETCH_POSTS } from '../../App/ActionTypes';

export const fetchPosts = createActionCreator(FETCH_POSTS, 'fetchedPosts');
