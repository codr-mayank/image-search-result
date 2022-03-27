import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import ImageSideCard from "../ImageSideCard/ImageSideCard";
import './ImageGallery.scss';

const ImageGallery = ({
  imageList,
  handleImageClick,
  selectedImage,
  removeSelectedImage,
  handleSideCardNav,
  currentIndex
}) => {
  return (
    <div className='galleryContainer'>
      <div className={`gallery ${selectedImage ? 'smallWidth' : ''}`}>
        {(imageList || []).map(image => (
          <ImageCard
            key={image.id}
            image={image}
            handleImageClick={handleImageClick}
            selectedImage={selectedImage}
          />
        ))}
      </div>
      {selectedImage && (
        <ImageSideCard
          image={selectedImage}
          imageList={imageList}
          removeSelectedImage={removeSelectedImage}
          handleSideCardNav={handleSideCardNav}
          currentIndex={currentIndex}
          handleImageClick={handleImageClick}
        />
      )}
    </div>
  );
};

export default ImageGallery;
