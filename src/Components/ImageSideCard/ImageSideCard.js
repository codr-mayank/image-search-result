import React, { useEffect, useRef, useState } from "react";
import { Icon } from '@iconify/react';
import RelatedImageGallery from "../RelatedImages/RelatedImageGallery";
import baseUrl from "../../Constants/baseUrls";
import apiEndPoints from "../../Constants/apiEndPoints";
import { getImageDetailsList } from '../../Services/imageResultsApis';
import './ImageSideCard.scss';

const ImageSideCard = ({
  image,
  imageList,
  removeSelectedImage,
  handleSideCardNav,
  currentIndex
}) => {
  const [isPortrait, setIsPortrait] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [img, setImg] = useState(null);
  const [dimensionString, setDimensionString] = useState('');
  const [showDimensions, setShowDimensions] = useState(false);
  const [similarList, setSimilarList] = useState([]);

  const imageUrl = `${baseUrl.picsumPhotos}${apiEndPoints.getImage}/${image.id}/${parseInt(image.width / 10)}/${parseInt(image.height / 10)}`

  const abortController = useRef();
  let signal;

  const fetchImage = async (url, largeImage = false, abortSignal = null) => {
    try {
      const res = await fetch(url, { signal: abortSignal });
      const imageBlob = await (res || {}).blob();
      const imageObjectURL = URL.createObjectURL(imageBlob);
      if (largeImage) {
        setImg(imageObjectURL);
      } else {
        setImg(null);
        setThumbnail(imageObjectURL);
      }
    } catch (error) {
      // error handling
    }
  };

  const getImages = async () => {
    let pageNumber = Math.floor(Math.random() * 83 + 1);

    const response = await getImageDetailsList({ pageNumber, pageLimit: 12 });
    setSimilarList(response);
  }

  useEffect(() => {
    fetchImage(imageUrl, false);

    getImages();
  }, [image]);

  useEffect(() => {
    if (abortController.current) {
      abortController.current.abort('hello');
    }

    abortController.current = new AbortController();
    signal = abortController.current.signal;

    fetchImage(image.download_url, true, signal);
    setDimensionString(image.width + ' x ' + image.height);
    setIsPortrait(image.height > image.width);
  }, [thumbnail, abortController]);

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
        className={`largeImageDiv ${isPortrait ? 'largePadding' : ''}`}
        onClick={handleImageOnClick}
      >
        <img
          src={img || thumbnail}
          className='largeImage'
          onMouseOver={() => handleOnImageMouseHover(true)}
          onMouseOut={() => handleOnImageMouseHover(false)}
        />
      </div>
      <span className={`dimensions ${showDimensions ? '' : 'hide'}`}>{dimensionString}</span>
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
      <div className='relatedImagesSection'>
        <span className='title'>Related images</span>
        <RelatedImageGallery
          imageList={similarList || []}
          selectedImage={image}
        />
      </div>
    </div>
  );
};

export default ImageSideCard;
