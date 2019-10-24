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
  } = props;

  useEffect(() => {
    onFetchMessage();
  }, [onFetchMessage]);

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
  const { messages } = state.Message.message;

  return { fetchedMessage: messages };
};

export default connect(mapStateToProps, {
  onFetchMessage: fetchMessage,
  onPostMessage: postMessage,
})(App);
