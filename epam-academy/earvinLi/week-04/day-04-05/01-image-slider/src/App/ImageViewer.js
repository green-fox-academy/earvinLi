// External Dependencies
import React from 'react';
import {
  css,
  StyleSheet,
} from 'aphrodite';

// Local Variables
const styles = StyleSheet.create({
  descriptionStyle: {
    color: '#989695',
    fontSize: 15,
  },
  mainContainerStyle: {
    display: 'flex',
    flexDirection: 'column',
    height: 360,
    position: 'relative',
    width: 640,
  },
  textContainerStyle: {
    backgroundColor: 'rgba(0, 0, 0, .7)',
    bottom: 0,
    padding: 15,
    position: 'absolute',
  },
  titleStyle: {
    color: 'white',
    fontSize: 21,
    marginBottom: 12,
  },
});

// Component Definition
function ImageViewer(props) {
  const {
    currentImageDescription,
    currentImageRegular,
    currentImageTitle,
  } = props;

  const {
    descriptionStyle,
    mainContainerStyle,
    textContainerStyle,
    titleStyle,
  } = styles;

  return (
    <div className={css(mainContainerStyle)}>
      <img
        alt={currentImageTitle}
        src={currentImageRegular}
      />
      <div className={css(textContainerStyle)}>
        <div className={css(titleStyle)}>{currentImageTitle}</div>
        <div className={css(descriptionStyle)}>{currentImageDescription}</div>
      </div>
    </div>
  );
}

export default ImageViewer;
