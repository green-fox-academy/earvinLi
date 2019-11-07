// Internal Dependencies
import { createActionCreator } from '../../App/RootUtilities';
import {
  CLOSE_POST_ADD_EDIT_DIALOG,
  OPEN_POST_ADD_EDIT_DIALOG,
} from '../../App/ActionTypes';

export const closePostAddEditDialog = createActionCreator(CLOSE_POST_ADD_EDIT_DIALOG);
export const openPostAddEditDialog = createActionCreator(OPEN_POST_ADD_EDIT_DIALOG, 'updateType', 'updateTargetId');
