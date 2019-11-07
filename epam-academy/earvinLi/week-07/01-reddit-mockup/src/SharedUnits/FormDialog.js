// External Dependencies
import React, { useState } from 'react';

// Material-UI Dependencies
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

// Component Definition
const FormDialog = (props) => {
  const {
    isOpen,
    onClose,
    onSubmit,
    textFieldData,
    title,
    text,
  } = props;

  const [ inputValues, setInputValues ] = useState();

  const onCloseDialog = () => {
    onClose();
    setInputValues({});
  };

  const onChangeInputValue = event => setInputValues({
    ...inputValues,
    [event.target.name]: event.target.value,
  });

  const textFields = textFieldData.map((item, index) => {
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
        value={(inputValues && inputValues.name) || value}
      />
    );
  });

  return (
    <Dialog
      aria-labelledby="form-dialog-title"
      onClose={onCloseDialog}
      open={isOpen}
    >
      <DialogTitle id="form-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{text}</DialogContentText>
        {textFields}
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={onCloseDialog}>Cancel</Button>
      <Button
        color="primary"
        // TODO: Modify the logic to not force all fields to be required
        disabled={!inputValues || Object.values(inputValues).includes('')}
        onClick={() => {
          onClose();
          onSubmit(inputValues);
        }}
      >
        Submit
      </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FormDialog;
