import React from 'react';

const MovingImages = ({images, delayIncrement}) => {
  return (
    <div className="image-container">
      {images.map((image, index) => (
        <div key={index} className="image-wrapper">
        <img
          className="moving-image"
          src={image.src}
          alt={image.alt}
          title={image.label}
          style={{
            width: '100px',
            height: '100px',
            animationDelay: `${index * delayIncrement}s`,
            zIndex: index
          }}
        />
      </div>
      ))}
    </div>
  );
};

export default MovingImages;