import React from 'react';
import wordData from '../wordData';

const WordCountDisplay = () => {
  const wordCount = wordData.length;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h3 className='wordCount mt-3 mb-0'>Total words: {wordCount}</h3>
    </div>
  );
};

export default WordCountDisplay;
