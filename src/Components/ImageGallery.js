import React from "react";
import ImageCard from "./ImageCard";

const ImageGallery = ({ imageList }) => {
  return (
    <div>
      <div>Gallery</div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {(imageList || []).map(image => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
