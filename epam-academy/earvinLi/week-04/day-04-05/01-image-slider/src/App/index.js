// External Dependencies
import React, { useState } from 'react';

// Internal Dependencies
import ImageData from './ImageData';
import ImagePreviewer from './ImagePreviewer';

// Component Definition
function App() {
  const [images, setImages] = useState(ImageData);
  const [currentImageIndex, setCurrentImage] = useState(0);
  // console.log(images[currentImageIndex]);

  const ImageDataThumb = ImageData.map(image => image.thumb);
  return <ImagePreviewer imageThumbData={ImageDataThumb}/>;
}

export default App;
