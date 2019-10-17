// External Dependencies
import React, { useState } from 'react';

// Internal Dependencies
import ImageData from './ImageData';
import ImagePreviewer from './ImagePreviewer';

// Component Definition
function App() {
  const [images, setImages] = useState(ImageData);
  const [currentImageIndex, setCurrentImage] = useState(0);
  console.log(currentImageIndex);
  // console.log(images[currentImageIndex]);

  const ImageDataThumb = ImageData.map(image => image.thumb);
  return (
    <div>
      <ImagePreviewer
        setCurrentImage={setCurrentImage}
        imageThumbData={ImageDataThumb}
      />
    </div>
  );
}

export default App;
