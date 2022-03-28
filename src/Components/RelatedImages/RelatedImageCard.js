import React, { useEffect, useState } from "react";
import apiEndPoints from "../../Constants/apiEndPoints";
import baseUrl from "../../Constants/baseUrls";
import './RelatedImageCard.scss';

const RelatedImageCard = ({ image }) => {
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    const imageUrl = `${baseUrl.picsumPhotos}${apiEndPoints.getImage}/${image.id}/${parseInt(image.width / 10)}/${parseInt(image.height / 10)}`
    setImageUrl(imageUrl);
  }, [image]);

  /**
   * handleImageDetailsClick: Function to open image using image url in new tab
   */
  const handleImageDetailsClick = () => {
    window.open(image.url);
  }

  return (
    <div
      id='imageCard'
      style={{
        maxWidth: (image.width * 100) / image.height,
      }}
    >
      <img
        src={imageUrl}
        className='imageStyle'
        onClick={handleImageDetailsClick}
      />
      <div
        className='imageDetail'
        onClick={handleImageDetailsClick}
      >
        <span className="noTextOverflow">{image.author}</span>
        <span className="noTextOverflow">{image.url}</span>
      </div>
    </div>
  );
};

export default RelatedImageCard;
