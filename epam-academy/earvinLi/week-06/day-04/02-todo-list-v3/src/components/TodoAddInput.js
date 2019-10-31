// External Dependencies
import React from 'react';
import {
  css,
  StyleSheet,
} from 'aphrodite';

// Local Variables
const styles = StyleSheet.create({
  inputButton: {
    backgroundColor: '#DE69E8',
    borderRadius: 5,
    borderWidth: 0,
    color: '#ffffff',
    fontFamily: ['Lato', 'sans-serif'],
    fontSize: 26,
  },
  inputField: {
    border: '1px solid grey',
    borderRadius: 5,
    fontSize: 24,
    height: 50,
    width: 320,
  },
  mainContainer: {
    display: 'flex',
    margin: '50px 0 30px 0',
  },
});

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
