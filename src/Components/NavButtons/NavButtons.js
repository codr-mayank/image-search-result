import React from "react";
import { Icon } from '@iconify/react';
import './NavButtons.scss';

const NavButtons = ({
  handlePageNav,
  pageNumber,
  setSpecificPageNumber
}) => {
  return (
    <div className='buttonDiv'>
      <div
        className='secondaryButton'
        onClick={() => setSpecificPageNumber(1)}
      >
        First
      </div>
      <button
        className='buttonStyle'
        onClick={() => handlePageNav(false)}
        disabled={pageNumber <= 1}
      >
        <Icon className='icon' icon="akar-icons:chevron-left" />
      </button>
      <span className='text'>Showing Page {pageNumber} (out of 10)</span>
      <button
        className='buttonStyle'
        onClick={() => handlePageNav(true)}
        disabled={pageNumber >= 10}
      >
        <Icon className='icon' icon="akar-icons:chevron-right" />
      </button>
      <div
        className='secondaryButton'
        onClick={() => setSpecificPageNumber(10)}
      >
        Last
      </div>
    </div>
  );
};

export default NavButtons;
