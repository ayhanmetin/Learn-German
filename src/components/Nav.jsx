import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import wordData from '../wordData';
import './nav.css';

export default function Nav() {
  const wordCount = wordData.length;

  const handleClick = () => {
    window.location.href = '/'; // This will refresh the page
  };

  return (
    <>
      <div className="d-flex mt-4 flex-column justify-content-center align-items-center navMain1">
        <div className="navMain2">
          <span className="navMain3">
            <span 
              className="text-body-secondary count m-0 p-0"
              style={{ cursor: 'pointer' }} 
              onClick={handleClick} // Handle the click to refresh the page
            >
              📚 {wordCount}
            </span>
          </span>
        </div>
      </div>
    </>
  );
}
