// Internal Dependencies
import { createReducer } from '../../App/RootUtilities';
import {
  CLOSE_POST_ADD_EDIT_DIALOG,
  OPEN_POST_ADD_EDIT_DIALOG,
  UPDATE_POST_ADD_EDIT_DIALOG_INPUT,
} from '../../App/ActionTypes';

const INITIAL_STATE = {
  isOpen: false,
  title: '',
  updateTarget: null,
  updateType: null,
  url: '',
};

const closePostAddEditDialog = () => (INITIAL_STATE);

const openPostAddEditDialog = (state, action) => {
  if (action.updateTarget) {
    const { id, title, url } = action.updateTarget

    return {
      isOpen: true,
      title,
      updateType: 'edit',
      url,
      updateTargetId: id,
    };
  }

  return { ...state, isOpen: true };
};

const updatePostAddEditDialogInput = (state, action) => ({
  ...state,
  [action.propertyName]: action.value,
});

export default createReducer(INITIAL_STATE, {
  [CLOSE_POST_ADD_EDIT_DIALOG]: closePostAddEditDialog,
  [OPEN_POST_ADD_EDIT_DIALOG]: openPostAddEditDialog,
  [UPDATE_POST_ADD_EDIT_DIALOG_INPUT]: updatePostAddEditDialogInput,
});
