// External Dependencies
import React from 'react';
import {
  css,
  StyleSheet,
} from 'aphrodite';

// Local Variables
const styles = StyleSheet.create({
  imageThumbStyle: {
    border: '1px solid #ddd',
    borderRadius: 5,
    height: 50,
    margin: '15px 5px',
    padding: 5,
    width: 50,
    ':hover': {
      boxShadow: '3px 3px 2px rgba(0, 0, 255, .2)',
    },
  },
});

// Component Definition
function ImagePreviewer(props) {
  const {
    imageThumbData,
    setCurrentImage,
  } = props;

  const { imageThumbStyle } = styles;

  // TODO: index may not be a good idea here when the data list changes
  const imageThumbSection = imageThumbData.map((imageThumbURL, index) => (
    <img
      className={css(imageThumbStyle)}
      // TODO: Correct this alt
      alt={imageThumbURL}
      key={imageThumbURL}
      onClick={() => setCurrentImage(index)}
      src={imageThumbURL}
    />
  ));

  return (
    <div>
      {imageThumbSection}
    </div>
  );
}

export default ImagePreviewer;
