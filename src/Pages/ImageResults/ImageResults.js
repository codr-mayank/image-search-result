import React, { useEffect, useState } from 'react';
import ImageGallery from '../../Components/ImageGallery';
import NavButtons from '../../Components/NavButtons';
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
  }, [pageNumber]);

  const handleNextClick = () => {
    setPageNumber(pageNumber + 1);
  };

  const handlePreviousClick = () => {
    setPageNumber(pageNumber - 1);
  };

  return (
    <div className='container'>
      <h3 className='header'>Image Results</h3>
      <NavButtons
        handleNextClick={handleNextClick}
        handlePreviousClick={handlePreviousClick}
        pageNumber={pageNumber}
      />
      <ImageGallery
        imageList={imageDetailsList}
      />
      <NavButtons
        handleNextClick={handleNextClick}
        handlePreviousClick={handlePreviousClick}
        pageNumber={pageNumber}
      />
    </div>
  );
};

export default ImageResults;
