// Internal Dependencies
import {
  MESSAGE_FETCH_REQUEST,
  MESSAGE_FETCH_SUCCEED,
  MESSAGE_POST_REQUEST,
  MESSAGE_POST_SUCCEED,
} from '../../App/ActionTypes';

export const fetchMessage = () => async (dispatch) => {
  dispatch({ type: MESSAGE_FETCH_REQUEST });

  const fetchedMessageJSON = await fetch('https://stream-vanadium.glitch.me/messages');
  const fetchedMessage = await fetchedMessageJSON.json();

  dispatch({ type: MESSAGE_FETCH_SUCCEED, message: fetchedMessage });
};

export const postMessage = (message) => async (dispatch) => {
  dispatch({ type: MESSAGE_POST_REQUEST });

  const postedMessageJSON = await fetch('https://stream-vanadium.glitch.me/messages', {
    method: 'POST',
    body: JSON.stringify({ user: 'Earvin', text: message }),
    headers: { 'content-type': 'application/json' }
  });
  const postedMessage = await postedMessageJSON.json();

  dispatch({ type: MESSAGE_POST_SUCCEED, message: postedMessage });
};
