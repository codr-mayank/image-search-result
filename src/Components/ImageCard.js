import React from "react";
import './ImageCard.scss';

const ImageCard = ({ image }) => {
  return (
    <div className='imageCard'>
      <img
        className='imageStyle'
        src={image.download_url}
      />
      <div className='imageDetail'>
        <span>{image.author}</span>
        <span>{image.url}</span>
      </div>
    </div>
  );
};

export default ImageCard;
