// External Dependencies
import React from 'react';
import {
  css,
  StyleSheet,
} from 'aphrodite';

// Internal Dependencies
import TodoAddInput from './TodoAddInput';
import TodoList from './TodoList';
import { TodoStyles } from '../App/Theme';

// Local Variables
const styles = StyleSheet.create(TodoStyles);

// Component Definition
const Todo = () => {
  const {
    mainContainerStyle,
    mainTitleStyle,
    todoListContainerStyle,
  } = styles;

  // const onDeleteTodo = (todoId) => {
  //   const currentTodoList = todoList;
  //   const newTodoList = currentTodoList.filter(todo => todo.id !== todoId);
  //   setTodo(newTodoList);
  // };

  return (
    <>
      <div className={css(mainContainerStyle)}>
        <div className={css(mainTitleStyle)}>TODOS</div>
        <div className={css(todoListContainerStyle)}>
          <TodoAddInput />
          <TodoList />
        </div>
      </div>
    </>
  );
};

export default Todo;
