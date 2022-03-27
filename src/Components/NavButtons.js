import React from "react";
import './NavButton.scss';

const NavButtons = ({ handlePageNav, pageNumber }) => {
  return (
    <div className='buttonDiv'>
      <button className='buttonStyle' onClick={() => handlePageNav(false)} disabled={pageNumber <= 1}>Previous</button>
      <button className='buttonStyle' onClick={() => handlePageNav(true)} disabled={pageNumber >= 10}>Next</button>
    </div>
  );
};

export default NavButtons;
