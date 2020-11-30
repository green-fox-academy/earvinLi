// External Dependencies
import React, { useState } from 'react';
import { connect } from 'react-redux';

// Internal Dependencies
import {
  addTag,
  removeAllTags,
  removeTag,
} from './TagAction';

// Component Definition
function TagSection(props) {
  const [inputTag, setInputTag] = useState('');

  const {
    onAddTag,
    onRemoveTag,
    onRemoveAllTags,
    tags,
  } = props;
  console.log(tags);

  const tagsSection = () => tags.map(tag => (
    <div
      key={tag}
      onClick={() => onRemoveTag(tag)}
      style={{
        backgroundColor: 'blue',
        color: 'white',
        height: 50,
        margin: 28,
        width: 100,
      }}
    >
      {tag}
    </div>
  ));

  return (
    <div style={{ display: 'flex' }}>

      <div>
        {tagsSection()}
      </div>

      <div>
        <h1>Add Tag</h1>
        <input
          onChange={(event) => setInputTag(event.target.value)}
          value={inputTag}
        />
        <button onClick={() => onAddTag(inputTag)}>Add</button>
      </div>

      <div>
        <h1>Remove All Tags</h1>
        <button onClick={() => onRemoveAllTags()}>Remove All Tags</button>
      </div>

    </div>
  );
}

const mapStateToProps = (state) => ({
  tags: state.TagSection.tags,
});

const mapDispatchToProps = (dispatch) => ({
  onAddTag: (tag) => dispatch(addTag(tag)),
  onRemoveAllTags: () => dispatch(removeAllTags()),
  onRemoveTag: (tag) => dispatch(removeTag(tag)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TagSection);
