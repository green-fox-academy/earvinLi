// External Dependencies
import React, { useState } from 'react';
import {
  css,
  StyleSheet,
} from 'aphrodite';

// Internal Dependencies
import ImageData from './ImageData';
import ImagePreviewer from './ImagePreviewer';
import ImageViewer from './ImageViewer';

// Local Variables
const styles = StyleSheet.create({
  mainContainerStyle: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
});

// Component Definition
function App() {
  const [images] = useState(ImageData);
  const [currentImageIndex, setCurrentImage] = useState(0);

  const { mainContainerStyle } = styles;

  const {
    description: currentImageDescription,
    title: currentImageTitle,
    url: currentImageURL,
  } = images[currentImageIndex];
  const ImageDataThumb = ImageData.map(image => image.url);

  const onChangeImage = (direction) => {
    const currentImageIndexLimit = direction === 'previous' ? 0 : 4;

    currentImageIndex === currentImageIndexLimit
      ? setCurrentImage(direction === 'previous' ? 4 : 0)
      : setCurrentImage(direction === 'previous' ? currentImageIndex - 1 : currentImageIndex + 1);
  }

  return (
    <div className={css(mainContainerStyle)}>
      <ImageViewer
        currentImageDescription={currentImageDescription}
        currentImageTitle={currentImageTitle}
        currentImageURL={currentImageURL}
        changeImage={onChangeImage}
      />
      <ImagePreviewer
        imageThumbData={ImageDataThumb}
        setCurrentImage={setCurrentImage}
      />
    </div>
  );
}

export default App;
