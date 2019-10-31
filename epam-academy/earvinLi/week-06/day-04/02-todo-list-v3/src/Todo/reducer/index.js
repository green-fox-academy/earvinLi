// Internal Dependencies
import { createReducer } from '../../App/RootUtilities';
import { TODO_ADD_REQUEST } from '../../App/ActionTypes';

const INITIAL_STATE = {
  todoList: [
    { text: 'Buy some Focal Banger' },
    { text: 'Drink them all' },
  ],
};

const todoAddRequest = (state, action) => {
  const currentTodoList = state.todoList;
  const newTodoList = [ ...currentTodoList, action.todo ];

  return {
    ...state,
    todoList: newTodoList,
  };
};

export default createReducer(INITIAL_STATE, {
  [TODO_ADD_REQUEST]: todoAddRequest,
});
