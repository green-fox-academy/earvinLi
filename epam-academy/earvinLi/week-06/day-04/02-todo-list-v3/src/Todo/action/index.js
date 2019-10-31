// Internal Dependencies
import { createActionCreator } from '../../App/RootUtilities';
import { TODO_ADD_REQUEST } from '../../App/ActionTypes';

export const addTodoRequest = createActionCreator(TODO_ADD_REQUEST, 'todo');
