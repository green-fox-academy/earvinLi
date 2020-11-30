// External Dependencies
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Internal Dependencies
import TodoItem from './TodoItem';
import { fetchTodoRequest } from './action';

// Component Definition
const TodoList = (props) => {
  const {
    onFetchTodoRequest,
    todoList,
  } = props;

  useEffect(() => {
    onFetchTodoRequest();
  }, [ onFetchTodoRequest ]);

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

export default connect(mapStateToProps, {
  onFetchTodoRequest: fetchTodoRequest,
})(TodoList);
