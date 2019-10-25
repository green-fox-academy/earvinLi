// External Dependencies
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Internal Dependencies
import {
  fetchMessage,
  postMessage,
} from './action';

const App = (props) => {
  const {
    fetchedMessage,
    onFetchMessage,
    onPostMessage,
    postedMessage,
  } = props;

  useEffect(() => {
    onFetchMessage();
  }, [ onFetchMessage, postedMessage ]);

  return (
    <>
      <ul>
        {fetchedMessage && fetchedMessage.map((message, messageIndex) => <li key={`${messageIndex}-${message.text}`}>{message.text}</li>)}
      </ul>
      <button onClick={() => onPostMessage('Hi there~')}>Send</button>
    </>
  );
};

const mapStateToProps = (state) => {
  const {
    message,
    postedMessage,
  } = state.Message;
  console.log(postedMessage);

  return {
    fetchedMessage: message.messages,
    postedMessage,
  };
};

export default connect(mapStateToProps, {
  onFetchMessage: fetchMessage,
  onPostMessage: postMessage,
})(App);
