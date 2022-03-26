import React from "react";

const ImageCard = ({ image }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <img src={image.download_url} style={{ width: 'fit-content', height: '200px' }} />
      {image.author}
    </div>
  );
};

export default ImageCard;
