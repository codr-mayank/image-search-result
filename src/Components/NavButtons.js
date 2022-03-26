import React from "react";

const NavButtons = ({ handleNextClick, handlePreviousClick, pageNumber }) => {
  return (
    <div className='buttonDiv'>
      <button className='buttonStyle' onClick={handlePreviousClick} disabled={pageNumber <= 1}>Previous</button>
      <button className='buttonStyle' onClick={handleNextClick} disabled={pageNumber >= 10}>Next</button>
    </div>
  );
};

export default NavButtons;
