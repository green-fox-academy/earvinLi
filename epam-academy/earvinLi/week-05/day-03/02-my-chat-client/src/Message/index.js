// External Dependencies
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Internal Dependencies
import { fetchMessage } from './action';

const App = (props) => {
  const {
    fetchedMessage,
    onFetchMessage,
    onPostMessage,
  } = props;

  useEffect(() => {
    onFetchMessage();
  });

  return (
    <>
      <ul>
        {fetchedMessage && fetchedMessage.map(message => <li key={message.text}>{message.text}</li>)}
      </ul>
      <button onClick={async () => {
        const postedMessageJSON = await fetch('https://stream-vanadium.glitch.me/messages', {
          method: 'POST',
          body: JSON.stringify({ user: "Earvin", text: "Hi there~" }),
        });
        const postedMessage = await postedMessageJSON.json();
        console.log(postedMessage);
        }}>Send</button>
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
