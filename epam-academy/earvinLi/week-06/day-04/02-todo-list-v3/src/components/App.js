// External Dependencies
import React from 'react';
import {
  css,
  StyleSheet,
} from 'aphrodite';

// Internal Dependencies
import TodoAddInput from './TodoAddInput';
import TodoList from './TodoList';
import { AppStyles } from './Theme';

// Local Variables
const styles = StyleSheet.create(AppStyles);

// Component Definition
const App = () => {
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

export default App;
