// External Dependencies
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Internal Dependencies
import { fetchMessage } from './action';

const App = (props) => {
  const {
    fetchedMessage,
    onFetchMessage,
  } = props;

  useEffect(() => {
    onFetchMessage();
  });

  return (
    <ul>
      {fetchedMessage && fetchedMessage.map(message => <li key={message.text}>{message.text}</li>)}
    </ul>
  );
};

const mapStateToProps = (state) => {
  const { messages } = state.Message.message;

  return { fetchedMessage: messages };
};

export default connect(mapStateToProps, {
  onFetchMessage: fetchMessage,
})(App);
