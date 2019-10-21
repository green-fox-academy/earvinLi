// Internal Dependencies
import {
  TAG_ADD,
  TAG_REMOVE_ALL,
  TAG_REMOVE,
} from '../App/ActionTypes';

const INITIAL_STATE = {
  tags: ['blue', 'bold', 'hipster'],
};

const tagReducer = (state = INITIAL_STATE, action) => {
  let { tags } = state;
  // This new array makes Redux think it gets new state
  const newTags = [ ...tags ];
  // const oldTags = tags;
  const {
    type,
    tag,
  } = action;
  const tagIndex = tags.indexOf(tag);

  switch (type) {
    case TAG_ADD:
      if (tagIndex === -1) newTags.push(tag);
      return { ...state, tags: newTags };
    case TAG_REMOVE_ALL: return { ...state, tags: []};
    case TAG_REMOVE:
      // filter gives us a new array
      if (tagIndex !== -1) tags = tags.filter((item, index) => index !== tagIndex);
      return { ...state, tags };
    default: return state;
  }
}

export default tagReducer;
