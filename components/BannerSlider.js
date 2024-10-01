'use client';

import { useState, useEffect } from 'react';

const ImageSlider = () => {
  const images = [
    '/Innovision.jpeg',
    '/Hackverse.jpeg',
    '/Conclave.jpeg'
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === images.length - 1 ? 0 : prevImage + 1
      );
    }, 7000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[80vh]  overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-scale-down"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;