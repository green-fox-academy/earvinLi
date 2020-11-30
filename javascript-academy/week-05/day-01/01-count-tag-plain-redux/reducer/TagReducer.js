const INITIAL_STATE = {
  tags: [],
};

const countReducer = (state = INITIAL_STATE, action) => {
  const { tags } = state;
  const {
    type,
    tag,
  } = action;
  const tagIndex = tags.indexOf(tag);

  switch (type) {
    case 'ADD_TAG':
      if (tagIndex === -1) tags.push(tag);
      return { ...state, tags};
    case 'REMOVE_ALL_TAGS': return { ...state, tags: []};
    case 'REMOVE_TAG':
      if (tagIndex !== -1) tags.splice(tagIndex, 1)
      return { ...state, tags};
    default: return state;
  }
}

module.exports = countReducer;
