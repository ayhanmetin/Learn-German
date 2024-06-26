import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import wordData from '../wordData';
import { SIcon } from './IconBox';
import './today.css';

const Today = () => {
  const { wordNo } = useParams();
  const [wordDetails, setWordDetails] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const filteredWords = wordData.filter(word => word.wordNo === wordNo);
    setWordDetails(filteredWords);
  }, [wordNo]);

  const copyUrlToClipboard = useCallback(() => {
    const url = `${window.location.origin}${location.pathname}`;
    navigator.clipboard
      .writeText(url)
      .then(() => {
        console.log('URL copied to clipboard!');
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  }, [location.pathname]);

  const ShareButton = () => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
      copyUrlToClipboard();
      setIsActive(true);
      setTimeout(() => setIsActive(false), 3000);
    };

    return (
      <button
        className={`shareButton ${isActive ? 'animate' : ''}`}
        onClick={handleClick}
        style={{ border: 'none', background: 'none', cursor: 'pointer' }}
        title='Copy URL'
      >
        <SIcon />
        {isActive && (
          <span className='feedbackText'>Heutige Wörter kopiert!</span>
        )}
      </button>
    );
  };

  if (!wordDetails.length) {
    return <div>No word found for this word number!</div>;
  }

  return (
    <div className='container col-12'>
      <div className='d-flex justify-content-center'>
        <ShareButton />
      </div>
      {wordDetails.map((details, index) => (
        <div
          key={index}
          className='border-bottom mainBody container col-12 text-center border-dark-subtle p-4 mb-3'
        >
          <h2 className='wordDay'>
            {details.article} {details.word}{' '}
            <p className='fst-italic fs-6 text-body-secondary'>{details.grammar}</p>
          </h2>
          <div>
          {details.example1 && (
            <p className='textWord'>
              <strong>‣</strong> {details.example1}
            </p>
          )}
          {details.example2 && (
            <p className='textWord'>
              <strong>‣</strong> {details.example2}
            </p>
          )}
          {details.example3 && (
            <p className='textWord'>
              <strong>‣</strong> {details.example3}
            </p>
          )}
          {details.example4 && (
            <p className='textWord'>
              <strong>‣</strong> {details.example4}
            </p>
          )}
          {details.example5 && (
            <p className='textWord'>
              <strong>‣</strong> {details.example5}
            </p>
          )}
          </div>
          <p className='textWord fst-italic mt-4'>
            <strong>&nbsp;-</strong> &nbsp;{`"${details.meaningENG}"`}
          </p>
          <p className='textWord fst-italic'>
            <strong>&nbsp;-</strong> &nbsp;{`"${details.meaningTR}"`}
          </p>
          {details.tip && (
            <p className='textWord mt-3'>
              <strong>&nbsp;⇢</strong> {details.tip}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Today;
