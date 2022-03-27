import React, { useEffect, useState } from "react";
import apiEndPoints from "../Constants/apiEndPoints";
import baseUrl from "../Constants/baseUrls";
import './ImageCard.scss';

const ImageCard = ({ image, handleImageClick, selectedImage }) => {
  const [img, setImg] = useState();
  const [isThisImageSelected, setIsThisImageSelected] = useState(false);
  let imageUrl = `${baseUrl.picsumPhotos}${apiEndPoints.getImage}/${image.id}/${parseInt(image.width / 10)}/${parseInt(image.height / 10)}`

  const fetchImage = async () => {
    const res = await fetch(imageUrl);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };

  useEffect(() => {
    fetchImage();
  }, []);

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

  const handleImageDetailsClick = () => {
    window.open(image.url);
  }

  return (
    <div
      className={`imageCard ${isThisImageSelected ? 'selected' : ''}`}
      style={{
        maxWidth: (image.width * 154) / image.height,
      }}
    >
      <img
        src={img}
        className='imageStyle'
        onClick={() => handleImageClick(image)}
      />
      <div className='imageDetail' onClick={handleImageDetailsClick}>
          <span className="noTextOverflow">{image.author}</span>
          <span className="noTextOverflow">{image.url}</span>
      </div>
    </div>
  );
};

export default ImageCard;
