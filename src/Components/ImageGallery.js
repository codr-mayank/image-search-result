import React from "react";
import ImageCard from "./ImageCard";
import './ImageGallery.scss';

const ImageGallery = ({ imageList }) => {
  return (
    <div className='galleryContainer'>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {(imageList || []).map(image => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
      <div>
        Card
      </div>
    </div>
  );
}

export default ImageGallery;
