import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const images = [
    '/Cheeseburger.jpg',
    '/chicken.jpg',
    'Fries.jpg',
    '/hotdog.jpg',
    '/Mac.jpg',
    '/Milkshake.jpg'
  ];

  return (
    <section className="gallery-section" id="gallery">
      <h2>Gallery</h2>
      <div className="gallery-container">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Gallery item ${index}`} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
