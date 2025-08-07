import React from 'react';
import './Loader.css';
import downArrow from '../assets/r2.svg';
import upArrow from '../assets/r1.svg';

const Loader = () => {
  return (
    <div className="relative flex justify-center items-center w-full">
      <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full circle-svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M100,10
               a90,90 0 1,1 -0.01,0"
            fill="none"
            stroke="#60A5FA"
          />
        </svg>

        {/* Arrows rotating along the path */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="arrow-container">
            <img src={upArrow} alt="Arrow Up" className="rotating-arrow arrow-up" />
            <img src={downArrow} alt="Arrow Down" className="rotating-arrow arrow-down" />
          </div>
        </div>

        {/* Overlay text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-1 text-xs sm:text-sm md:text-base">
          <p className="font-semibold">Diagnosis Reports</p>
          <p className="font-semibold">Heart Reports</p>
          <p className="font-semibold">Prescriptions</p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
