// Internal Dependencies
import {
  TAG_ADD,
  TAG_REMOVE_ALL,
  TAG_REMOVE,
} from '../App/ActionTypes';

export const addTag = (tag) => ({
  type: TAG_ADD,
  tag,
});

export const removeAllTags = () => ({ type: TAG_REMOVE_ALL });

export const removeTag = (tag) => ({
  type: TAG_REMOVE,
  tag,
});
