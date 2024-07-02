// WordCountDisplay.jsx
import React from 'react';
import wordData from '../wordData';
import { Link } from 'react-router-dom';

const WordCountDisplay = () => {
  const wordCount = wordData.length;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'start',
      }}
    >
      <h3 className='wordCount mt-3 mb-0'>
        <Link
          to='/word'
          style={{
            textDecoration: 'none',
            color: 'inherit',
            padding: '0',
            height: 'fit-content',
            display: 'inline',
            marginRight: '5px',
          }}
        >
          Total words: {wordCount}
        </Link>
      </h3>
    </div>
  );
};

export default WordCountDisplay;
