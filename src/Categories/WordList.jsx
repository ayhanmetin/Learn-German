import React from 'react';
import { useNavigate } from 'react-router-dom';
import wordData from '../wordData';

const WordList = React.memo(() => {
  const navigate = useNavigate();

  const handleWordClick = (word) => {
    navigate(`/word/${encodeURIComponent(word)}`);
  };

  return (
    <div className="d-flex align-items-start justify-content-start mb-5 mx-3">
      <div>
        {wordData.map((word, index) => (
          <React.Fragment key={index}>
            <span
              className="word-list-item"
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
});

export default WordList;
