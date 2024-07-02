import React from 'react';
import { useNavigate } from 'react-router-dom';
import wordData from '../wordData';
import './wordList.css';

const WordList = () => {
  const navigate = useNavigate();

  const handleWordClick = word => {
    navigate(`/word/${encodeURIComponent(word)}`);
  };

  return (
    <div className='container mt-0 pt-0'>
      <div className='word-list'>
        {wordData.map((word, index) => (
          <React.Fragment key={index}>
            <span
              className='wordList'
              style={{ cursor: 'pointer' }}
              onClick={() => handleWordClick(word.word)}
            >
              {word.article ? `${word.article} ` : ''}
              {word.word}
            </span>
            {index < wordData.length - 1 && <span>, </span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default WordList;
