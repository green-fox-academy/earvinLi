// External Dependencies
import React from 'react';

function ImagePreviewer(props) {
  const { imageThumbData } = props;
  console.log(imageThumbData);
  const imageThumbSection = imageThumbData.map(imageThumbURL => (
    <img alt={imageThumbURL} src={imageThumbURL}/>
  ));

  return (
    <div>
      {imageThumbSection}
    </div>
  );
}

export default ImagePreviewer;
