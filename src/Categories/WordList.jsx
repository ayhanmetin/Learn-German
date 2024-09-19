import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import wordData from '../wordData';
import './wordList.css';
import Footer3 from '../components/Footer3';

const WordList = () => {
  const navigate = useNavigate();

  const handleWordClick = word => {
    navigate(`/word/${encodeURIComponent(word)}`);
  };

  return (
    <>
      <div className='d-flex px-0 m-0 align-items-start justify-content-start mb-5 word-list mx-3 wordListMain'>
        <div className='p-0 mt-0 wordListMain'>
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
      <Footer3 />
    </>
  );
};

export default WordList;
