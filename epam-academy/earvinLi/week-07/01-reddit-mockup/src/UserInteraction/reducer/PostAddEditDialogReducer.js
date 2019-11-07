// Internal Dependencies
import { createReducer } from '../../App/RootUtilities';
import {
  CLOSE_POST_ADD_EDIT_DIALOG,
  OPEN_POST_ADD_EDIT_DIALOG,
} from '../../App/ActionTypes';

const INITIAL_STATE = {
  isOpen: false,
  updateType: 'add',
  updateTargetId: null,
};

const closePostAddEditDialog = (state) => ({ ...state, isOpen: false });
const openPostAddEditDialog = (state, action) => ({
  ...state,
  isOpen: true,
  updateType: action.updateType,
  updateTargetId: action.updateTargetId,
});

export default createReducer(INITIAL_STATE, {
  [CLOSE_POST_ADD_EDIT_DIALOG]: closePostAddEditDialog,
  [OPEN_POST_ADD_EDIT_DIALOG]: openPostAddEditDialog,
});
