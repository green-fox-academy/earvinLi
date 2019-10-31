// External Dependencies
import React from 'react';
import {
  css,
  StyleSheet,
} from 'aphrodite';

// Internal Dependencies
import { TodoAddInputStyles } from './Theme';

// Local Variables
const styles = StyleSheet.create(TodoAddInputStyles);

// Component Definition
function TodoAddInput(props) {
  const { onAddTodo } = props;

  const {
    inputButton,
    inputField,
    mainContainer,
  } = styles;

  let todoText = '';

  return (
    <div className={css(mainContainer)}>
      <input
        className={css(inputField)}
        onChange={e => todoText = e.target.value}
        type='text'
      />
      <button
        className={css(inputButton)}
        onClick={() => onAddTodo({ text: todoText })}
        type='button'
      >
        Add
      </button>
    </div>
  );
}

export default TodoAddInput;
