// External Dependencies
import React, { useState } from 'react';
import { connect } from 'react-redux';

// Material-UI Dependencies
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

// Internal Dependencies
import { addPost } from '../PostList/action';
import { closePostAddEditDialog } from '../UserInteraction/action';

// Component Definition
const PostAddEditDialog = (props) => {
  // TODO: Use Redux to handle the dialog visibility
  const {
    onAddPost,
    onClosePostAddEditDialog,
    postAddEditDialogIsOpen,
  } = props;

  const [ inputValues, setInputValues ] = useState({});

  const onCloseDialog = () => {
    setInputValues({});
    onClosePostAddEditDialog();
  };

  const onChangeInputValue = event => setInputValues({
    ...inputValues,
    [event.target.name]: event.target.value,
  });

  const textFields = [
    { label: 'Title', name: 'title', value: inputValues.title },
    { label: 'URL', name: 'url', value: inputValues.url },
  ].map((textFieldData, textFieldDataIndex) => {
    const {
      label,
      name,
      value,
    } = textFieldData;

    return (
      <TextField
        autoFocus={textFieldDataIndex === 0}
        fullWidth
        key={label}
        label={label}
        margin="normal"
        multiline
        name={name}
        onChange={onChangeInputValue}
        required
        type="text"
        value={value}
      />
    );
  });

  return (
    <Dialog
      aria-labelledby="form-dialog-title"
      onClose={onCloseDialog}
      open={postAddEditDialogIsOpen}
    >
      <DialogTitle id="form-dialog-title">Submit A New Post</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To submit a new post, please enter a title and an url here. We wiil put your post on the main page once it passed our inspection.
        </DialogContentText>
        {textFields}
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={onCloseDialog}>Cancel</Button>
      <Button
        color="primary"
        disabled={!inputValues.title || !inputValues.url}
        onClick={() => {
          onAddPost(inputValues);
          onClosePostAddEditDialog();
        }}
      >
        Submit
      </Button>
      </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  postAddEditDialogIsOpen: state.UserInteraction.postAddEditDialogIsOpen,
});

export default connect(mapStateToProps, {
  onAddPost: addPost,
  onClosePostAddEditDialog: closePostAddEditDialog,
})(PostAddEditDialog);
