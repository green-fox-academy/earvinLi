// External Dependencies
import React, { useState } from 'react';
import {
  css,
  StyleSheet,
} from 'aphrodite';

// Internal Dependencies
import TodoAddInput from './TodoAddInput';
import TodoItem from './TodoItem';
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

  const [ todoList, setTodo ] = useState([
    { text: 'Buy some Focal Banger' },
    { text: 'Drink them all' },
  ]);

  const onAddTodo = (todo) => {
    const currentTodoList = todoList;
    const newTodoList = [ ...currentTodoList, todo ];
    setTodo(newTodoList);
  };

  // const onDeleteTodo = (todoId) => {
  //   const currentTodoList = todoList;
  //   const newTodoList = currentTodoList.filter(todo => todo.id !== todoId);
  //   setTodo(newTodoList);
  // };

  const renderTodoItems = (todoList) => {
    return todoList.map(todo => (
      <TodoItem
        key={todo.text}
        todoText={todo.text}
      />
    ));
  };

  return (
    <>
      <div className={css(mainContainerStyle)}>
        <div className={css(mainTitleStyle)}>TODOS</div>
        <div className={css(todoListContainerStyle)}>
          <TodoAddInput onAddTodo={onAddTodo}/>
          {renderTodoItems(todoList)}
        </div>
      </div>
    </>
  );
};

export default App;
