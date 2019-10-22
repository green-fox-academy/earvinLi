// External Dependencies
import React, { useState } from 'react';
import { connect } from 'react-redux';

// Internal Dependencies
import signUpUser from './action';

// Material-UI Dependencies
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

// Local Varaibles
const useStyles = makeStyles(theme => ({
  formStyles: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  textFieldStyles: {
    width: 320,
  },
}));

// Component Definition
function SignUpForm(props) {
  const [inputValues, setInputValues] = useState({
    firstName: '',
    lastName: '',
    username: 'iEarvin',
    email: 'earvin.tli@gmail.com',
    password: '',
  });

  const { onSignUpUser } = props;

  const {
    formStyles,
    textFieldStyles,
  } = useStyles();

  const onChangeInputValue = event => setInputValues({
    ...inputValues,
    [event.target.name]: event.target.value,
  });

  const textFieldSection = [
    { id: 'first-name', label: 'First Name', name: 'firstName', value: inputValues.firstName },
    { id: 'last-name', label: 'Last Name', name: 'lastName', value: inputValues.lastName },
    { id: 'username', label: 'Userame', name: 'username', value: inputValues.username },
    { id: 'email', label: 'Email', name: 'email', value: inputValues.email },
    { id: 'password', label: 'Password', name: 'password', value: inputValues.password },
  ].map((textField, textFieldIndex) => {
    const {
      id,
      label,
      name,
      value,
    } = textField

    const type = (textFieldIndex === 3 || textFieldIndex === 4) ? name : '';

    return (
      <TextField
        className={textFieldStyles}
        id={id}
        inputProps={textFieldIndex === 4 ? { minLength: 8 } : {}}
        key={id}
        label={label}
        margin="normal"
        name={name}
        onChange={onChangeInputValue}
        required={textFieldIndex > 1 }
        type={type}
        value={value}
      />
    );
  });

  return (
    <form
      autoComplete="off"
      className={formStyles}
      onSubmit={(event) => {
        onSignUpUser(inputValues);
        event.preventDefault();
      }}
    >
      {textFieldSection}
      {/* TODO: Disable the button according to the validity status of the form */}
      <Button
        color="primary"
        type="submit"
        variant="contained"
      >
        SIGN UP
      </Button>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => ({
  onSignUpUser: (inputValues) => dispatch(signUpUser(inputValues)),
});

export default connect(() => ({}), mapDispatchToProps)(SignUpForm);
