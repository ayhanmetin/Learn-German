import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import wordData from '../wordData';
import WordList from './WordList';
import './wordDetail.css';

const WordDetail = () => {
  const { wordName } = useParams();
  const decodedWord = decodeURIComponent(wordName);

  // Check if the word exists in the data with optional chaining
  const word = wordData?.find(
    w => w?.word?.toLowerCase() === decodedWord.toLowerCase()
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [decodedWord]);

  // If the word is not found, display a fallback
  if (!word) {
    return (
      <div className='text-center'>
        <h2>Word not found</h2>
        <p>
          We couldn't find the word you're looking for. Please check the word or
          try another one.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className='d-flex px-2 flex-column mb-5 mt-0 pt-3'>
        <div className='margin frameMAin d-flex justify-content-start align-items-center'>
          <div className='col-12 border-bottom border-top px-3 pt-2'>
            <div className='d-flex justify-content-start mb-3'>
              <div className='d-flex gap-3 justify-content-start align-items-start text-body-emphasis'></div>
            </div>

            <div className='margin d-flex flex-row'>
              {/* Word Details */}
              <div className='col-6'>
                <div className='d-flex justify-content-start align-items-center mb-0'>
                  <b className='mobileWord mb-3 wordMain wordDay'>{`${
                    word.article || ''
                  } ${word.word}`}</b>
                </div>

                {word.grammar && (
                  <div className='pt-2 ps-0 pe-2'>
                    <p className='verbText text-body-secondary fs-6 ms-0 ps-0 mb-2 mt-0 pt-0'>
                      ✏︎ &nbsp;&nbsp; {word.grammar}
                    </p>
                  </div>
                )}

                <div className='word-container fs-4 mainBody mt-0 pt-0'>
                  <div className='d-flex verbText text-body-secondary flex-row mb-0'>
                    {word.PartizipII && (
                      <div className='pt-2 pe-0'>
                        <p className='mt-0 ms-0 verbText pt-0 m-0 p-0 flex-column ms-0 me-2 fs-6 text-body-secondary'>
                          {word.PartizipII} &nbsp;
                        </p>
                      </div>
                    )}
                    {word.Präteritum && (
                      <div className='pt-2 pe-0'>
                        <p className='ms-0 mt-0 verbText pt-0 fs-6 flex-column text-body-secondary'>
                          /&nbsp;&nbsp; {word.Präteritum}
                        </p>
                      </div>
                    )}
                    {word.plural && (
                      <div className='pt-2 pe-0'>
                        <p className='ms-0 mt-0 pt-0 fs-6 flex-column text-body-secondary'>
                          {word.plural}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className='word-container fs-4 mainBody mt-0 pt-0'>
                  <p className='textWord meaning fst-italic mt-2'>
                    <strong>&nbsp;-</strong> &nbsp;{word.meaningENG}
                  </p>

                  {word.meaningTR && (
                    <p className='textWord fst-italic'>
                      <strong>&nbsp;-</strong> &nbsp;{word.meaningTR}
                    </p>
                  )}
                </div>

                {/* Example Sentences Below the Word */}
                <div className='exampleSentence'>
                  {word.example1 && (
                    <p className='textWord'>
                      <strong>‣</strong> {word.example1}
                    </p>
                  )}
                  {word.example2 && (
                    <p className='textWord'>
                      <strong>‣</strong> {word.example2}
                    </p>
                  )}
                  {word.example3 && (
                    <p className='textWord'>
                      <strong>‣</strong> {word.example3}
                    </p>
                  )}
                  {word.example4 && (
                    <p className='textWord'>
                      <strong>‣</strong> {word.example4}
                    </p>
                  )}
                  {word.example5 && (
                    <p className='textWord'>
                      <strong>‣</strong> {word.example5}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-1 p-0 m-0 pt-1'>
        <WordList />
      </div>
    </>
  );
};

export default WordDetail;
