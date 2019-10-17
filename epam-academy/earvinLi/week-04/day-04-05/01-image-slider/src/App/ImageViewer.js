// External Dependencies
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
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
  iconContainerStyle: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 12px',
    backgroundImage: 'linear-gradient(to bottom, white, #E2E2E2)',
  },
  mainContainerStyle: {
    display: 'flex',
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
  viewContainerStyle: {
    display: 'flex',
    flexDirection: 'column',
    height: 360,
    position: 'relative',
    width: 640,
  },
});

// Component Definition
function ImageViewer(props) {
  const {
    changeImage,
    currentImageDescription,
    currentImageRegular,
    currentImageTitle,
  } = props;

  const {
    descriptionStyle,
    iconContainerStyle,
    mainContainerStyle,
    textContainerStyle,
    titleStyle,
    viewContainerStyle,
  } = styles;

  // TODO: Make a shared icon button component
  return (
    <div className={css(mainContainerStyle)}>
      <div
        className={css(iconContainerStyle)}
        onClick={() => changeImage('previous')}
      >
        <SvgIcon><ArrowBackIosIcon /></SvgIcon>
      </div>
      <div className={css(viewContainerStyle)}>
        <img
          alt={currentImageTitle}
          src={currentImageRegular}
        />
        <div className={css(textContainerStyle)}>
          <div className={css(titleStyle)}>{currentImageTitle}</div>
          <div className={css(descriptionStyle)}>{currentImageDescription}</div>
        </div>
      </div>
      <div
        className={css(iconContainerStyle)}
        onClick={() => changeImage('next')}
      >
        <SvgIcon><ArrowForwardIosIcon /></SvgIcon>
      </div>
    </div>
  );
}

export default ImageViewer;
