// External Dependencies
import React from 'react';

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
    disabled,
    isOpen,
    onChange,
    onClose,
    onSubmit,
    textFieldData,
    title,
    text,
  } = props;

  const onChangeInputValue = (event) =>
    onChange(event.target.name, event.target.value);

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
        value={value}
      />
    );
  });

  return (
    <Dialog
      aria-labelledby="form-dialog-title"
      onClose={onClose}
      open={isOpen}
    >
      <DialogTitle id="form-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{text}</DialogContentText>
        {textFields}
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={onClose}>Cancel</Button>
      <Button
        color="primary"
        disabled={disabled}
        onClick={() => {
          onClose();
          onSubmit();
        }}
      >
        Submit
      </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FormDialog;
