import React, { useEffect, useState } from 'react';
import ImageGallery from '../../Components/ImageGallery';
import NavButtons from '../../Components/NavButtons';
import { getImageDetailsList } from '../../Services/imageResultsApis';
import './ImageResults.scss';

const ImageResults = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [imageDetailsList, setImageDetailsList] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

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

  const handlePageNav = isIncrement => {
    if (isIncrement) {
      setPageNumber(pageNumber + 1);
    } else {
      setPageNumber(pageNumber - 1);
    }
  };

  const handleImageClick = image => {
    setSelectedImage(image);
  }

  const removeSelectedImage = () => {
    setSelectedImage(null);
  }

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
