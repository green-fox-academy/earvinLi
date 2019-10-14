// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';

// Component Definition
function Button(props) {
  return (
    <button onClick={props.func} disabled={props.disabled}>
      {props.text}
    </button>
  );
}

Button.propTypes = {
  func: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
