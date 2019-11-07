// Internal Dependencies
import { createActionCreator } from '../../App/RootUtilities';
import {
  CLOSE_POST_ADD_EDIT_DIALOG,
  OPEN_POST_ADD_EDIT_DIALOG,
  UPDATE_POST_ADD_EDIT_DIALOG_INPUT,
} from '../../App/ActionTypes';

export const closePostAddEditDialog = createActionCreator(CLOSE_POST_ADD_EDIT_DIALOG);

export const openPostAddEditDialog = (updateTargetId = null) =>
  (dispatch, getState) => {
    const updateTarget = getState().PostList.posts.find(
      item => item.id === updateTargetId
    );

    dispatch({
      type: OPEN_POST_ADD_EDIT_DIALOG,
      updateTarget,
    });
  };

export const updatePostAddEditDialogInput = createActionCreator(
  UPDATE_POST_ADD_EDIT_DIALOG_INPUT,
  'propertyName',
  'value',
);
