import React, { useEffect, useState } from "react";
import apiEndPoints from "../Constants/apiEndPoints";
import baseUrl from "../Constants/baseUrls";
import { getImageData } from "../Services/imageResultsApis";
import './ImageCard.scss';

const ImageCard = ({ image, handleImageClick }) => {
  const [img, setImg] = useState();
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

  return (
    <div
      className='imageCard'
      // style={{ maxWidth: (225 > image.width / 10 ? (image.width / 10) + 5 : 225) }}
      // style={{ maxWidth: (image.width / image.height) * 100 }}
      style={{
        maxWidth: (image.width * 154) / image.height,
        // minWidth: (image.width * 154) / image.height
      }}
    >
      <img
        src={img}
        className='imageStyle'
        onClick={() => handleImageClick(image)}
      />
      <a className='imageDetailLink' href={image.url} target='_blank'>
        <div className='imageDetail'>
          <span className="noTextOverflow">{image.author}</span>
          <span className="noTextOverflow">{image.url}</span>
      </div>
      </a>
    </div>
  );
};

export default ImageCard;
