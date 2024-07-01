// WordList.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import wordData from '../wordData'; // Assuming you have a file with word data
import WordDetail from './WordDetail';

const WordList = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleWordClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="container mt-5">
      {selectedIndex !== null && (
        <div className="word-detail mb-4">
          <WordDetail index={selectedIndex} />
        </div>
      )}
      <div className="word-list">
        {wordData.map((word, index) => (
          <React.Fragment key={index}>
            <span 
              style={{ cursor: 'pointer', color: 'blue' }}
              onClick={() => handleWordClick(index)}
            >
              {word.article ? `${word.article} ` : ''}{word.word}
            </span>
            {index < wordData.length - 1 && <span>, </span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default WordList;
