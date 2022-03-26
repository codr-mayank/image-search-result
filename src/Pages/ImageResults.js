import React, { useState } from 'react';
import ImageGallery from '../Components/ImageGallery';
import { getImageDetailsList } from '../Services/imageResultsApis';

const ImageResults = () => {
  const [imageDetailsList, setImageDetailsList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const handlePageNunberClick = async () => {
    const response = await getImageDetailsList({ pageNumber });
    setImageDetailsList(response);
  };

  return (
    <div>
      Hellow
      <button onClick={handlePageNunberClick}>Click</button>
      <ImageGallery
        imageList={imageDetailsList}
      />
    </div>
  )
}

export default ImageResults;
