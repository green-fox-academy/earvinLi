// External Dependencies
import React from 'react';

// Material-UI Dependencies
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// Component Definition
const FormDialog = (props) => {
  const {
    children,
    disabled,
    hasSubmitButton,
    isOpen,
    onClose,
    onSubmit,
    title,
    text,
  } = props;

  return (
    <Dialog
      aria-labelledby="form-dialog-title"
      onClose={onClose}
      open={isOpen}
    >
      <DialogTitle id="form-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{text}</DialogContentText>
        {children}
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={onClose}>
          {`${hasSubmitButton ? 'Cancel' : 'Close'}`}
        </Button>
        {hasSubmitButton && <Button
          color="primary"
          disabled={disabled}
          onClick={onSubmit}
        >
          Submit
        </Button>}
      </DialogActions>
    </Dialog>
  );
};

export default FormDialog;
