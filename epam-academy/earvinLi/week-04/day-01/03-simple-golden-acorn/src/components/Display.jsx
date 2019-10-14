// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';

// Component Definition
function Display(props) {
  return (
    <div>{props.children}</div>
  );
}

Display.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default Display;
