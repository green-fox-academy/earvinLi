// External Dependencies
import React from 'react';
import { connect } from 'react-redux';

// Internal Dependencies
import TodoItem from './TodoItem';

// Component Definition
const TodoList = (props) => {
  const { todoList } = props;

  const renderTodoItems = (todoList) => {
    return todoList.map(todo => (
      <TodoItem
        key={todo.text}
        todoText={todo.text}
      />
    ));
  };

  return (
    <div>
      {renderTodoItems(todoList)}
    </div>
  )

};

const mapStateToProps = (state) => {
  return { todoList: state.todoList };
};

export default connect(mapStateToProps, {})(TodoList);
