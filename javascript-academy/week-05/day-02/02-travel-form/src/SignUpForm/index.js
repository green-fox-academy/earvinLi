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
    username: '',
    email: '',
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
    { id: 'first-name', label: 'First Name', name: 'firstName', onChange: onChangeInputValue },
    { id: 'last-name', label: 'Last Name', name: 'lastName', onChange: onChangeInputValue },
    { id: 'username', label: 'Userame', name: 'username', onChange: onChangeInputValue },
    { id: 'email', label: 'Email', name: 'email', onChange: onChangeInputValue },
    { id: 'password', label: 'Password', name: 'password', onChange: onChangeInputValue },
  ].map((textField, index) => {
    const {
      id,
      label,
      name,
      onChange,
    } = textField

    const type = (index === 3 || index === 4) ? name : '';

    return (
      <TextField
        className={textFieldStyles}
        id={id}
        key={id}
        label={label}
        margin="normal"
        name={name}
        onChange={onChange}
        type={type}
      />
    );
  });

  return (
    <form autoComplete="off" className={formStyles}>
      {textFieldSection}
      <Button
        color="primary"
        onClick={() => onSignUpUser(inputValues)}
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
