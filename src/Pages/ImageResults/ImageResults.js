import React, { useEffect, useState } from 'react';
import ImageGallery from '../../Components/ImageGallery/ImageGallery';
import NavButtons from '../../Components/NavButtons/NavButtons';
import { getImageDetailsList } from '../../Services/imageResultsApis';
import './ImageResults.scss';

const ImageResults = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [imageDetailsList, setImageDetailsList] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  /**
   * getImages: To get (fetch) image list from backend for provided page number and set it to component's state.
   * 
   */
  const getImages = async () => {
    const response = await getImageDetailsList({ pageNumber });
    setImageDetailsList(response);
  }

  useEffect(() => {
    getImages();
    setSelectedImage(null);
  }, [pageNumber]);

  useEffect(() => {
    if (selectedImage && selectedImage.id) {
      let index = (imageDetailsList || []).findIndex(image => image.id === selectedImage.id);
      setCurrentIndex(index);
    }
  }, [selectedImage]);

  /**
   * handlePageNav: Function to set page number using navigation buttons
   * 
   * @param {*} isIncrement 
   */
  const handlePageNav = isIncrement => {
    if (isIncrement) {
      setPageNumber(pageNumber + 1);
    } else {
      setPageNumber(pageNumber - 1);
    }
  };

  const setSpecificPageNumber = page => {
    setPageNumber(page);
  }

  const handleImageClick = image => {
    setSelectedImage(image);
  }

  const removeSelectedImage = () => {
    setSelectedImage(null);
  }

  /**
   * handleSideCardNav: Function to set currenntIndex for side image card (with image details)
   * 
   * @param {*} isIncrement 
   */
  const handleSideCardNav = isIncrement => {
    if (isIncrement) {
      if (currentIndex < (imageDetailsList || []).length - 1) {
        setSelectedImage(imageDetailsList[currentIndex + 1]);
      }
    } else {
      if (currentIndex > 0) {
        setSelectedImage(imageDetailsList[currentIndex - 1]);
      }
    }
  }

  return (
    <div>
      <div className='topBar'>
        <h2 className='header'>Image Results</h2>
        <NavButtons
          handlePageNav={handlePageNav}
          pageNumber={pageNumber}
          setSpecificPageNumber={setSpecificPageNumber}
        />
      </div>
      <div className='container'>
        <ImageGallery
          imageList={imageDetailsList}
          handleImageClick={handleImageClick}
          selectedImage={selectedImage}
          removeSelectedImage={removeSelectedImage}
          handleSideCardNav={handleSideCardNav}
          currentIndex={currentIndex}
        />
      </div>
    </div>
  );
};

export default ImageResults;
