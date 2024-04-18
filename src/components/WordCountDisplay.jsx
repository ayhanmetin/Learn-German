import React from 'react';
import wordData from '../wordData'; 

const WordCountDisplay = () => {
  
  const wordCount = wordData.length;

  return (
    <div>
      <h3>Total Words Available: {wordCount}</h3>
    </div>
  );
};

export default WordCountDisplay;
