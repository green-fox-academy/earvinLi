// Internal Dependencies
import { SIGN_UP_USE_REQUEST } from '../../ActionTypes';

const INITIAL_STATE = {
  SignUpForm: {},
};

const SignUpFormReducer = (state = INITIAL_STATE, action) => {
  console.log(action);
  const {
    type,
    inputValues,
  } = action;

  if (type === SIGN_UP_USE_REQUEST) return { ...state, SignUpForm: inputValues }
};

export default SignUpFormReducer;
