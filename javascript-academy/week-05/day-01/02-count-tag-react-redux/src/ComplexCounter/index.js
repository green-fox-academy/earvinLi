// External Dependencies
import React from 'react';
import { connect } from 'react-redux';

// Component Definition
function TagSection(props) {
  const { complexCounter } = props;

  return (
      <div>
        <h1>Complex Counter</h1>
        <h4>{complexCounter}</h4>
      </div>
  );
}

const mapStateToProps = (state) => {
  const { counter } = state.CounterSection;
  const { tags } = state.TagSection;
  const complexCounter = counter + tags.length;

  return { complexCounter, };
};

export default connect(mapStateToProps, {})(TagSection);
