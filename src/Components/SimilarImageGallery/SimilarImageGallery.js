import React from "react";
import SimilarImageCard from "./SimilarImageCard";
import './SimilarImageGallery.scss';

const SimilarImageGallery = ({
  imageList
}) => {
  return (
    <div id='galleryContainer'>
      <div className='gallery'>
        {(imageList || []).map(image => (
          <SimilarImageCard
            key={image.id}
            image={image}
            similarResults={true}
          />
        ))}
      </div>
    </div>
  );
};

export default SimilarImageGallery;
