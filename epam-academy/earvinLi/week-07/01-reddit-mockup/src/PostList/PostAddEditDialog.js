// External Dependencies
import React from 'react';
import { connect } from 'react-redux';

// Material-UI Dependencies
import TextField from '@material-ui/core/TextField';

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
    onClosePostAddEditDialog,
    onEditPost,
    onUpdatePostAddEditDialogInput,
    postAddEditDialogIsOpen,
    postAddEditDialogMode,
    updateTargetId,
  } = props;

  const title = postAddEditDialogMode === 'edit' ? "Edit This Post" : "Submit A New Post";

  const text = postAddEditDialogMode === 'edit'
    ? "To edit this post, please modify the title and/or the url here. We wiil update your post on the main page once it passed our inspection."
    : "To submit a new post, please enter a title and an url here. We wiil put your post on the main page once it passed our inspection.";

  const onChangeInputValue = (event) =>
    onUpdatePostAddEditDialogInput(event.target.name, event.target.value);

  const textFields = [
    { label: 'Title', name: 'title', value: newTitle },
    { label: 'URL', name: 'url', value: newURL },
  ].map((item, index) => {
    const {
      label,
      name,
      required,
      value,
    } = item;

    return (
      <TextField
        autoFocus={index === 0}
        fullWidth
        key={label}
        label={label}
        margin="normal"
        multiline
        name={name}
        onChange={onChangeInputValue}
        required={required}
        type="text"
        value={value}
      />
    );
  });

  const onSubmitForm = () => {
    if (postAddEditDialogMode === 'edit') {
      onEditPost({ title: newTitle, url: newURL }, updateTargetId);
    } else {
      onAddPost({ title: newTitle, url: newURL });
    }

    onClosePostAddEditDialog();
  };

  // TODO: Modify the logic to not force all fields to be required
  return (
    <FormDialog
      disabled={!newTitle || !newURL}
      hasSubmitButton
      isOpen={postAddEditDialogIsOpen}
      onClose={onClosePostAddEditDialog}
      onSubmit={onSubmitForm}
      text={text}
      title={title}
    >
      {textFields}
    </FormDialog>
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
  onClosePostAddEditDialog: closePostAddEditDialog,
  onEditPost: editPost,
  onUpdatePostAddEditDialogInput: updatePostAddEditDialogInput,
})(PostAddEditDialog);
