import React, { useEffect, useState } from "react";
import apiEndPoints from "../../Constants/apiEndPoints";
import baseUrl from "../../Constants/baseUrls";
import './ImageCard.scss';

const ImageCard = ({ image, handleImageClick, selectedImage }) => {
  const [imageUrl, setImageUrl] = useState();
  const [isThisImageSelected, setIsThisImageSelected] = useState(false);
  const [imageHovered, setImageHovered] = useState(false);

  useEffect(() => {
    const imageUrl = `${baseUrl.picsumPhotos}${apiEndPoints.getImage}/${image.id}/${parseInt(image.width / 10)}/${parseInt(image.height / 10)}`
    setImageUrl(imageUrl);
  }, [image]);

  useEffect(() => {
    if (selectedImage) {
      if (selectedImage.id === image.id) {
        setIsThisImageSelected(true);
      } else {
        setIsThisImageSelected(false);
      }
    } else {
      setIsThisImageSelected(false);
    }
  });

  /**
   * handleImageDetailsClick: Function to open image using image url in new tab
   */
  const handleImageDetailsClick = () => {
    window.open(image.url);
  }

  const handleImageHover = value => {
    setImageHovered(value);
  }

  return (
    <div
      className={`imageCard ${isThisImageSelected ? 'selected' : ''}`}
      style={{
        maxWidth: (image.width * 155) / image.height,
      }}
      onMouseOver={() => handleImageHover(true)}
      onMouseOut={() => handleImageHover(false)}
    >
      <img
        src={imageUrl}
        className={`imageStyle ${imageHovered ? 'hover' : ''}`}
        onClick={() => handleImageClick(image)}
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

export default ImageCard;
