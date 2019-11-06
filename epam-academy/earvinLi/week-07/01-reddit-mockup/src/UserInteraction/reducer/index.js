// Internal Dependencies
import { createReducer } from '../../App/RootUtilities';
import {
  CLOSE_POST_ADD_EDIT_DIALOG,
  OPEN_POST_ADD_EDIT_DIALOG,
} from '../../App/ActionTypes';

const INITIAL_STATE = {
  postAddEditDialogIsOpen: false,
};

const closePostAddEditDialog = (state) => ({ ...state, postAddEditDialogIsOpen: false });
const openPostAddEditDialog = (state) => ({ ...state, postAddEditDialogIsOpen: true });

export default createReducer(INITIAL_STATE, {
  [CLOSE_POST_ADD_EDIT_DIALOG]: closePostAddEditDialog,
  [OPEN_POST_ADD_EDIT_DIALOG]: openPostAddEditDialog,
});
