// External Dependencies
import React, { useState } from 'react';

// Internal Dependencies
import ImageData from './ImageData';

// Component Definition
function App() {
  const [images, setImages] = useState(ImageData);
  const [currentImageIndex, setCurrentImage] = useState(0);
  console.log(images[currentImageIndex]);
  return <p>Working~</p>;
}

export default App;
