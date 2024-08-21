// WordCountDisplay.jsx
import React from 'react';
import wordData from '../wordData';
import { Link } from 'react-router-dom';

const WordCountDisplay = () => {
  const wordCount = wordData.length;

  return (
    <div>
      <h3 className='wordCount'>
        <Link
          to='/word'
          style={{
            textDecoration: 'none',
            color: 'inherit',
            height: 'fit-content',
            display: 'inline',
          }}
        >
          Total words: {wordCount}
        </Link>
      </h3>
    </div>
  );
};

export default WordCountDisplay;
