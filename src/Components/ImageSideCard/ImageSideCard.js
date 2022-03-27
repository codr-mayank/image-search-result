import React, { useEffect, useState } from "react";
import { Icon } from '@iconify/react';
import './ImageSideCard.scss';

const ImageSideCard = ({
  image,
  imageList,
  removeSelectedImage,
  handleSideCardNav,
  currentIndex
}) => {
  const [dimensions, setDimensions] = useState('');
  const [showDimensions, setShowDimensions] = useState(false);

  useEffect(() => {
    setDimensions(image.width + ' x ' + image.height);
  }, [image]);

  /**
   * handleImageDetailsClick: Function to open image using image url in new tab
   */
  const handleImageOnClick = () => {
    window.open(image.url);
  }

  const handleOnImageMouseHover = value => {
    setShowDimensions(value);
  }

  return (
    <div className='sideCardContainer'>
      <div className='actionButtonsDiv space'>
        <div className='actionButtonsDiv'>
          <button
            className='actionButton'
            onClick={removeSelectedImage}
          >
            <Icon className='icon' icon="akar-icons:cross" />
          </button>
        </div>
        <div className='actionButtonsDiv'>
          <button
            className={`actionButton ${currentIndex < 1 ? 'disabled' : ''}`}
            onClick={() => handleSideCardNav(false)}
            disabled={currentIndex < 1}
          >
            <Icon className='icon' icon="akar-icons:chevron-left" />
          </button>
          <button
            className={`actionButton ${currentIndex >= imageList.length - 1 ? 'disabled' : ''}`}
            onClick={() => handleSideCardNav(true)}
            disabled={currentIndex >= imageList.length - 1}
          >
            <Icon className='icon' icon="akar-icons:chevron-right" />
          </button>
        </div>
      </div>
      <div
        className={`largeImageDiv ${image.height > image.width * 1.2 ? 'largePadding' : ''}`}
        onClick={handleImageOnClick}
      >
        <img
          src={image.download_url}
          className='largeImage'
          onMouseOver={() => handleOnImageMouseHover(true)}
          onMouseOut={() => handleOnImageMouseHover(false)}
        />
      </div>
      <span className={`dimensions ${showDimensions ? '' : 'hide'}`}>{dimensions}</span>
      <div className='details'>
        <div className='imageDetail' onClick={handleImageOnClick}>
          <span className='heading noTextOverflow'>Author: {image.author}</span>
          <span className='smallText noTextOverflow'>{image.url}</span>
        </div>
        <button
          className='visit'
          onClick={handleImageOnClick}
        >
          Visit
        </button>
      </div>
    </div>
  );
};

export default ImageSideCard;
