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
  const [images, setImages] = useState(ImageData);
  const [currentImageIndex, setCurrentImage] = useState(0);
  // console.log(currentImageIndex);
  // console.log(images[currentImageIndex]);

  const { mainContainerStyle } = styles;

  const {
    description: currentImageDescription,
    regular: currentImageRegular,
    title: currentImageTitle,
  } = images[currentImageIndex];
  const ImageDataThumb = ImageData.map(image => image.thumb);

  return (
    <div className={css(mainContainerStyle)}>
      <ImageViewer
        currentImageDescription={currentImageDescription}
        currentImageRegular={currentImageRegular}
        currentImageTitle={currentImageTitle}
      />
      <ImagePreviewer
        setCurrentImage={setCurrentImage}
        imageThumbData={ImageDataThumb}
      />
    </div>
  );
}

export default App;
