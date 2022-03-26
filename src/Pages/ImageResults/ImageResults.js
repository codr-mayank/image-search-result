import React, { useEffect, useState } from 'react';
import ImageGallery from '../../Components/ImageGallery';
import { getImageDetailsList } from '../../Services/imageResultsApis';
import './ImageResults.scss';

const ImageResults = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [imageDetailsList, setImageDetailsList] = useState([]);

  const getImages = async () => {
    const response = await getImageDetailsList({ pageNumber });
    setImageDetailsList(response);
  }

  useEffect(() => {
    getImages();
  }, []);

  const handlePreviousClick = () => {
    setPageNumber(pageNumber - 1);
    getImages();
  };

  const handleNextClick = () => {
    setPageNumber(pageNumber + 1);
    getImages();
  };

  return (
    <div className='container'>
      <button onClick={handlePreviousClick} disabled={pageNumber <= 1}>Previous</button>
      <button onClick={handleNextClick} disabled={pageNumber >= 10}>Next</button>
      <ImageGallery
        imageList={imageDetailsList}
      />
    </div>
  );
};

export default ImageResults;
