// Internal Dependencies
import { SIGN_UP_USE_REQUEST } from '../../ActionTypes';

const signUpUser = (inputValues) => ({
  type: SIGN_UP_USE_REQUEST,
  inputValues,
});

export default signUpUser;
