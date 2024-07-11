import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import wordData from '../wordData';
import { SIcon, VoiceIcon } from './IconBox'; // Ensure VoiceIcon is properly imported
import './today.css';

const Today = () => {
  const { wordNo } = useParams();
  const [wordDetails, setWordDetails] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Find the word by wordNo or return null if not found
    const filteredWord = wordData.find(word => word.wordNo === wordNo);
    setWordDetails(filteredWord);
  }, [wordNo]);

  const navigateDate = useCallback((direction) => {
    const currentDate = wordNo ? new Date(2000 + parseInt(wordNo.slice(4, 6)), parseInt(wordNo.slice(2, 4)) - 1, parseInt(wordNo.slice(0, 2))) : new Date();
    currentDate.setDate(currentDate.getDate() + (direction === 'future' ? 1 : -1));
    const newWordNo = `${currentDate.getDate().toString().padStart(2, '0')}${(currentDate.getMonth() + 1).toString().padStart(2, '0')}${currentDate.getFullYear().toString().slice(2)}`;
    navigate(`/today/${newWordNo}`);
  }, [wordNo, navigate]);

  const copyUrlToClipboard = useCallback(() => {
    const url = `${window.location.origin}${location.pathname}`;
    navigator.clipboard.writeText(url).then(() => {
      console.log('URL copied to clipboard!');
    }).catch(err => {
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

  const readWordAloud = (word) => {
    console.log("Reading the word aloud: ", word);
    // Add actual implementation to read word aloud
  };

  return (
    <div className='col-12'>
      <div className='d-flex justify-content-between'>
        <button onClick={() => navigateDate('past')}>Previous Day</button>
        <ShareButton />
        <button onClick={() => navigateDate('future')}>Next Day</button>
      </div>
      <div className='d-flex justify-content-start align-items-center'>
        <div className='col-md-12'>
          <div className='d-flex justify-content-start align-items-center mb-3'>
            {wordDetails ? (
              <>
                <b className='mobileWord wordDay fs-1'>{`${wordDetails.article} ${wordDetails.word}`}</b>
                <button
                  className='ms-2 position-relative'
                  onClick={() => readWordAloud(wordDetails)}
                  style={{
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer',
                  }}
                >
                  <VoiceIcon width='22' height='22' />
                </button>
              </>
            ) : (
              <b className='fs-1'>No word for this date</b>
            )}
          </div>
          {wordDetails ? (
            <div className='d-flex justify-content-start'>
              <div className='word-container fs-4 mainBody'>
                {wordDetails.grammar && (
                  <p className='fst-italic grammar fs-5 ms-0 ps-0 mb-4 mt-0 pt-0 mb-4'>
                    {wordDetails.grammar}
                  </p>
                )}
                {[1, 2, 3, 4, 5].map(i => wordDetails[`example${i}`] && (
                  <p className='textWord' key={`example${i}`}>
                    <strong>‣</strong> {wordDetails[`example${i}`]}
                  </p>
                ))}
                {[1, 2, 3].map(i => wordDetails[`tip${i}`] && (
                  <p className='textWord mt-3' key={`tip${i}`}>
                    <strong>&nbsp;⇢</strong> {wordDetails[`tip${i}`]}
                  </p>
                ))}
                <p className='textWord meaning fst-italic mt-4'>
                  <strong>&nbsp;-</strong> {wordDetails.meaningENG}
                </p>
                {wordDetails.meaningTR && (
                  <p className='textWord fst-italic'>
                    <strong>&nbsp;-</strong> {wordDetails.meaningTR}
                  </p>
                )}
              </div>
            </div>
          ) : (
            <div className='text-center fs-4'>
              <p>No word details available for this date. Try navigating to another day!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Today;
