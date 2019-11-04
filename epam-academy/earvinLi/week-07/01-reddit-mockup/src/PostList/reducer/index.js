// Internal Dependencies
import { createReducer } from '../../App/RootUtilities';
import { FETCH_POSTS } from '../../App/ActionTypes';

const INITIAL_STATE = {
  posts: [
    {
      id: 1,
      title: 'NASA Ozone hole smallest it\'s been since 1988',
      url: '',
      timestamp: 1572852057152,
      score: 14700,
      owner: 'Anonymous',
    },
    {
      id: 2,
      title: 'Best Photobomb Ever - Hubble telescope was trying to take a picture of distant galaxies, but asteroids kept getting in the way',
      url: '',
      timestamp: 1572852319465,
      score: 278,
      owner: 'Anonymous',
    }
  ],
};

const fetchPosts = (state, action) => {};

export default createReducer(INITIAL_STATE, {
  [FETCH_POSTS]: fetchPosts,
});
