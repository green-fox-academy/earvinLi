// External Dependencies
import React from 'react';
import { connect } from 'react-redux';

// Internal Dependencies
import FormDialog from '../SharedUnits/FormDialog';
import { addPost } from '../PostList/action';
import { closePostAddEditDialog } from '../UserInteraction/action';

// Component Definition
const PostAddEditDialog = (props) => {
  // TODO: Use Redux to handle the dialog visibility
  const {
    onAddPost,
    onClosePostAddEditDialog,
    postAddEditDialogIsOpen,
    postAddEditDialogMode,
    updateTarget,
  } = props;

  const textFieldData = [
    { label: 'Title', name: 'title' },
    { label: 'URL', name: 'url' },
  ];

  if (postAddEditDialogMode === 'edit') {
    textFieldData.map((item, index) =>
      textFieldData[index]['value'] = updateTarget[item.name]);
  }

  const title = postAddEditDialogMode !== 'edit' ? "Submit A New Post" : "Edit This Post";
  const text = postAddEditDialogMode !== 'edit'
    ? "To submit a new post, please enter a title and an url here. We wiil put your post on the main page once it passed our inspection."
    : "To edit this post, please modify the title and/or the url here. We wiil update your post on the main page once it passed our inspection.";

  return (
    <FormDialog
      isOpen={postAddEditDialogIsOpen}
      onClose={onClosePostAddEditDialog}
      onSubmit={onAddPost}
      text={text}
      textFieldData={textFieldData}
      title={title}
    />
  );
};

const mapStateToProps = (state) => {
  const {
    isOpen,
    updateType,
    updateTargetId,
  } = state.UserInteraction.PostAddEditDialog;
  const updateTarget = state.PostList.posts.find(item => item.id === updateTargetId);

  return {
    postAddEditDialogIsOpen: isOpen,
    postAddEditDialogMode: updateType,
    updateTarget,
  };
};

export default connect(mapStateToProps, {
  onAddPost: addPost,
  onClosePostAddEditDialog: closePostAddEditDialog,
})(PostAddEditDialog);
