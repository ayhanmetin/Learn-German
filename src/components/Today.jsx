import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import wordData from '../wordData';
import { SIcon, VoiceIcon } from './IconBox';
import './today.css';
import Footer2 from './Footer2';

const Today = () => {
  const { wordNo } = useParams();
  const [wordDetails, setWordDetails] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const filteredWord = wordData.find(word => word.wordNo === wordNo);
    setWordDetails(filteredWord);
  }, [wordNo]);

  const navigateDate = useCallback(
    direction => {
      const currentDate = wordNo
        ? new Date(
            2000 + parseInt(wordNo.slice(4, 6)),
            parseInt(wordNo.slice(2, 4)) - 1,
            parseInt(wordNo.slice(0, 2))
          )
        : new Date();
      currentDate.setDate(
        currentDate.getDate() + (direction === 'future' ? 1 : -1)
      );
      const newWordNo = `${currentDate.getDate().toString().padStart(2, '0')}${(
        currentDate.getMonth() + 1
      )
        .toString()
        .padStart(2, '0')}${currentDate.getFullYear().toString().slice(2)}`;
      navigate(`/today/${newWordNo}`);
    },
    [wordNo, navigate]
  );

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
        {isActive && <span className='feedbackText'>Kopiert!</span>}
      </button>
    );
  };

  return (
    <div className='col-10'>
      <div className='d-flex p-5 todayButton justify-content-evenly mb-5'>
        <button
          className='btn fs-6 px-4 btn homeCss'
          onClick={() => navigateDate('past')}
        >
          Previous
        </button>
        <div className='mt-1 ms-4'>
          <ShareButton />
        </div>
        <button
          className='btn fs-6 px-5 homeCss'
          onClick={() => navigateDate('future')}
        >
          Next
        </button>
      </div>
      {wordDetails ? (
        <div className='d-flex justify-content-start align-items-center border-top'>
          <div className='col-md-12 mt-5'>
            <div className='d-flex justify-content-start align-items-center mb-3'>
              <b className='mobileWord wordDay fs-1'>{`${wordDetails.article} ${wordDetails.word}`}</b>
            </div>
            <div className='d-flex justify-content-start'>
              <div className='word-container fs-4 mainBody'>
                {wordDetails.grammar && (
                  <p className='fst-italic grammar fs-5 ms-0 ps-0 mb-4 mt-0 pt-0 mb-4'>
                    {wordDetails.grammar}
                  </p>
                )}
                {wordDetails.meaningENG && (
                  <p className='textWord meaning fst-italic mt-4'>
                    <strong>&nbsp;-</strong> {wordDetails.meaningENG}
                  </p>
                )}
                {wordDetails.meaningTR && (
                  <p className='textWord fst-italic'>
                    <strong>&nbsp;-</strong> {wordDetails.meaningTR}
                  </p>
                )}
                <div className='d-flex align-items-center gap-3'>
                  {wordDetails.PartizipII && (
                    <p className='textWord tense'>
                      <span className='grammar'>Partizip II:</span>{' '}
                      {wordDetails.PartizipII}
                    </p>
                  )}
                  {wordDetails.Präteritum && (
                    <p className='textWord tense'>
                      <span className='grammar'>Präteritum:</span>{' '}
                      {wordDetails.Präteritum}
                    </p>
                  )}
                </div>
                {wordDetails.plural && (
                  <p className='textWord tense'>
                    <span className='grammar'>Plural:</span>{' '}
                    {wordDetails.plural}
                  </p>
                )}
                {[1, 2, 3, 4, 5].map(
                  i =>
                    wordDetails[`example${i}`] && (
                      <p className='textWord' key={`example${i}`}>
                        <strong>‣</strong> {wordDetails[`example${i}`]}
                      </p>
                    )
                )}
                {[1, 2, 3].map(
                  i =>
                    wordDetails[`tip${i}`] && (
                      <p className='textWord mt-3' key={`tip${i}`}>
                        <p className='tip'>&nbsp;Tips</p>
                        <strong>&nbsp;⇢</strong> {wordDetails[`tip${i}`]}
                      </p>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='text-center fs-4'>
          <p>Try navigating to another day!</p>
        </div>
      )}
      <Footer2 />
    </div>
  );
};

export default Today;
