import React from "react";
import ImageCard from "./ImageCard";
import './ImageGallery.scss';
import ImageSideCard from "./ImageSideCard";

const ImageGallery = ({ imageList, handleImageClick, selectedImage }) => {
  return (
    <div className='galleryContainer'>
      <div className={`gallery ${selectedImage ? 'smallWidth' : ''}`}>
        {(imageList || []).map(image => (
          <ImageCard
            key={image.id}
            image={image}
            handleImageClick={handleImageClick}
          />
        ))}
      </div>
      {selectedImage && <ImageSideCard />}
    </div>
  );
}

export default ImageGallery;
