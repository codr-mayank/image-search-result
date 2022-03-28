import React from "react";
import RelatedImageCard from "./RelatedImageCard";
import './RelatedImageGallery.scss';

const RelatedImageGallery = ({
  imageList
}) => {
  return (
    <div id='galleryContainer'>
      <div className='gallery'>
        {(imageList || []).map(image => (
          <RelatedImageCard
            key={image.id}
            image={image}
            similarResults={true}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedImageGallery;
