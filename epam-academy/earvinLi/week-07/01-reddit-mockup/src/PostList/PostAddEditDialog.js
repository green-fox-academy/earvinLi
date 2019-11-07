// External Dependencies
import React from 'react';
import { connect } from 'react-redux';

// Internal Dependencies
import FormDialog from '../SharedUnits/FormDialog';
import {
  addPost,
  editPost,
} from '../PostList/action';
import {
  closePostAddEditDialog,
  updatePostAddEditDialogInput,
} from '../UserInteraction/action/PostAddEditDialogAction';

// Component Definition
const PostAddEditDialog = (props) => {
  // TODO: Use Redux to handle the dialog visibility
  const {
    newTitle,
    newURL,
    onAddPost,
    onEditPost,
    onClosePostAddEditDialog,
    onUpdatePostAddEditDialogInput,
    postAddEditDialogIsOpen,
    postAddEditDialogMode,
    updateTargetId,
  } = props;

  const textFieldData = [
    { label: 'Title', name: 'title', value: newTitle },
    { label: 'URL', name: 'url', value: newURL },
  ];

  const title = postAddEditDialogMode === 'edit' ? "Edit This Post" : "Submit A New Post";
  const text = postAddEditDialogMode === 'edit'
    ? "To edit this post, please modify the title and/or the url here. We wiil update your post on the main page once it passed our inspection."
    : "To submit a new post, please enter a title and an url here. We wiil put your post on the main page once it passed our inspection.";

  // TODO: Modify the logic to not force all fields to be required
  return (
    <FormDialog
      disabled={!newTitle || !newURL}
      isOpen={postAddEditDialogIsOpen}
      onChange={onUpdatePostAddEditDialogInput}
      onClose={onClosePostAddEditDialog}
      onSubmit={
        postAddEditDialogMode === 'edit'
          ? () => onEditPost({ title: newTitle, url: newURL }, updateTargetId)
          : () => onAddPost({ title: newTitle, url: newURL })
      }
      text={text}
      textFieldData={textFieldData}
      title={title}
    />
  );
};

const mapStateToProps = (state) => {
  const {
    isOpen,
    title,
    updateType,
    updateTargetId,
    url,
  } = state.UserInteraction.PostAddEditDialog;

  return {
    newTitle: title,
    newURL: url,
    postAddEditDialogIsOpen: isOpen,
    postAddEditDialogMode: updateType,
    updateTargetId,
  };
};

export default connect(mapStateToProps, {
  onAddPost: addPost,
  onEditPost: editPost,
  onClosePostAddEditDialog: closePostAddEditDialog,
  onUpdatePostAddEditDialogInput: updatePostAddEditDialogInput,
})(PostAddEditDialog);
