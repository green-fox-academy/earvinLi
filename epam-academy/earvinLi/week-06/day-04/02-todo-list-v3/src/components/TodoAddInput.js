// External Dependencies
import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  css,
  StyleSheet,
} from 'aphrodite';

// Internal Dependencies
import { addTodoRequest } from './action';
import { TodoAddInputStyles } from './Theme';

// Local Variables
const styles = StyleSheet.create(TodoAddInputStyles);

// Component Definition
const TodoAddInput = (props) => {
  const {
    inputButton,
    inputField,
    mainContainer,
  } = styles;

  const [todoText, setTodoText] = useState('');

  const { onAddTodoRequest } = props;

  return (
    <div className={css(mainContainer)}>
      <input
        className={css(inputField)}
        onChange={(e) => setTodoText(e.target.value)}
        type='text'
        value={todoText}
      />
      <button
        className={css(inputButton)}
        onClick={() => {
          onAddTodoRequest({ text: todoText });
          setTodoText('');
        }}
        type='button'
      >
        Add
      </button>
    </div>
  );
}

export default connect(() => ({}), {
  onAddTodoRequest: addTodoRequest,
})(TodoAddInput);
