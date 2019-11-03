// Internal Dependencies
import { createActionCreator } from '../../App/RootUtilities';
import { TODO_ADD_REQUEST } from '../../App/ActionTypes';

export const addTodoRequest = createActionCreator(TODO_ADD_REQUEST, 'todo');

export const fetchTodoRequest = () => async (dispatch) => {
  const todoListJSON = await fetch('http://localhost:8081/todos');
  const todoList = await todoListJSON.json();
  console.log(todoList);
};
