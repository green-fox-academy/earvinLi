// Internal Dependencies
import {
  MESSAGE_FETCH_REQUEST,
  MESSAGE_FETCH_SUCCEED,
} from '../../App/ActionTypes';

export const fetchMessage = () => async (dispatch) => {
  dispatch({ type: MESSAGE_FETCH_REQUEST });

  const fetchedMessageJSON = await fetch('https://stream-vanadium.glitch.me/messages');
  const fetchedMessage = await fetchedMessageJSON.json();

  dispatch({ type: MESSAGE_FETCH_SUCCEED, message: fetchedMessage });
};
