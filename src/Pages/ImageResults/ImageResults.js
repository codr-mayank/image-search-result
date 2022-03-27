import React, { useEffect, useState } from 'react';
import ImageGallery from '../../Components/ImageGallery';
import NavButtons from '../../Components/NavButtons';
import { getImageDetailsList } from '../../Services/imageResultsApis';
import './ImageResults.scss';

const ImageResults = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [imageDetailsList, setImageDetailsList] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const getImages = async () => {
    const response = await getImageDetailsList({ pageNumber });
    setImageDetailsList(response);
  }

  useEffect(() => {
    getImages();
    setSelectedImage(null);
  }, [pageNumber]);

  const handleNextClick = () => {
    setPageNumber(pageNumber + 1);
  };

  const handlePreviousClick = () => {
    setPageNumber(pageNumber - 1);
  };

  const handleImageClick = image => {
    setSelectedImage(image);
  }

  return (
    <div>
      <div className='topBar'>
        <h2 className='header'>Image Results</h2>
        <NavButtons
          handleNextClick={handleNextClick}
          handlePreviousClick={handlePreviousClick}
          pageNumber={pageNumber}
        />
      </div>
      <div className='container'>
        <ImageGallery
          imageList={imageDetailsList}
          handleImageClick={handleImageClick}
          selectedImage={selectedImage}
        />
        {!!(imageDetailsList || []).length && (
          <NavButtons
            handleNextClick={handleNextClick}
            handlePreviousClick={handlePreviousClick}
            pageNumber={pageNumber}
          />
        )}
      </div>
    </div>
  );
};

export default ImageResults;
