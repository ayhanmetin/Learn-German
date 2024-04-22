import React from 'react';
import "./wordApp.css"

const WordCountDisplay = ({ wordData }) => {
  const wordCount = wordData.length;
  return (
    <div>
      <h3 className='wordCount'>Total words: {wordCount}</h3>
    </div>
  );
};

export default WordCountDisplay;
