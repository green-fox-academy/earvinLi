// Internal Dependencies
import { createActionCreator } from './RootUtilities';
import { TODO_ADD_REQUEST } from './ActionTypes';

export const addTodoRequest = createActionCreator(TODO_ADD_REQUEST, 'todo');
