import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import wordData from '../wordData';
import WordList from './WordList';

const WordDetail = () => {
  const { wordName } = useParams();
  const decodedWord = decodeURIComponent(wordName);
  const word = wordData.find(w => w.word === decodedWord);

  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [decodedWord]);

  if (!word) {
    return <div>Word not found.</div>;
  }

  const wordDayStyle = {
    fontFamily: "'Libre Franklin', sans-serif",
    fontSize: '31px',
  };

  return (
    <>
      <div className='col-12 ps-1 d-flex flex-column mb-5 mt-0 pt-3'>
        <div className='margin d-flex ps-2 mobileMain justify-content-start align-items-center'>
          <div className='col-12'>
            <div className='d-flex justify-content-start align-items-center mb-0'>
              <b className='mobileWord mb-3 wordMain wordDay'>{`${word.article} ${word.word}`}</b>
            </div>

            <div className='word-container fs-4 mainBody mt-0 pt-0'>
              <div className='d-flex grammarMain text-body-secondary flex-row mb-0'>
                {word.grammar && (
                  <div className='pt-2 ps-0 pe-2'>
                    <p className='fst-italic grammarMain text-body-secondary fs-6 ms-0 ps-0 mb-2 mt-0 pt-0'>
                      {word.grammar}
                      <span className='grammarMain text-body-secondary'></span>
                    </p>
                  </div>
                )}
                {word.PartizipII && (
                  <div className='pt-2 pe-0'>
                    <p className='mt-0 ms-0 pt-0 m-0 p-0 flex-column ms-0 me-2 fs-6 grammarMain text-body-secondary'>
                      <span className='grammarMain text-body-secondary'>
                        {' '}
                        &nbsp;&nbsp; ☞ &nbsp;&nbsp;
                      </span>{' '}
                      {word.PartizipII} &nbsp;
                    </p>
                  </div>
                )}
                {word.Präteritum && (
                  <div className='pt-2 pe-0'>
                    <p className='ms-0 mt-0 pt-0 fs-6 flex-column grammarMain text-body-secondary'>
                      <span className='grammarMain text-body-secondary '>
                        {' '}
                        /&nbsp;&nbsp;
                      </span>{' '}
                      {word.Präteritum}
                    </p>
                  </div>
                )}
                {word.plural && (
                  <div className='pt-2 pe-0'>
                    <p className='ms-0 mt-0 pt-0 fs-6 flex-column grammarMain text-body-secondary'>
                      <span className='grammarMain text-body-secondary'>
                        &nbsp;☞ &nbsp;&nbsp;{' '}
                      </span>{' '}
                      {word.plural}
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className='d-flex justify-content-start'>
              {' '}
              <div className='word-container fs-4 mainBody mt-0 pt-0'>
                <p className='textWord meaning fst-italic mt-2'>
                  <strong>&nbsp;-</strong> &nbsp;{word.meaningENG}
                </p>

                {word.meaningTR && (
                  <p className='textWord fst-italic'>
                    <strong>&nbsp;-</strong> &nbsp;{word.meaningTR}
                  </p>
                )}

                {word.example1 && (
                  <>
                    <p className='tip'>&nbsp;Beispielsätze</p>
                    <p className='textWord'>
                      <strong>‣</strong> {word.example1}
                    </p>
                  </>
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

                {word.tip1 && (
                  <p className='textWord mt-3 fs-6'>
                    <p className='tip'>&nbsp;Tipps</p>
                    <strong>&nbsp;⇢</strong> {word.tip1}
                  </p>
                )}
                {word.tip2 && (
                  <p className='textWord mt-3 fs-6'>
                    <strong>&nbsp;⇢</strong> {word.tip2}
                  </p>
                )}
                {word.tip3 && (
                  <p className='textWord mt-3 fs-6'>
                    <strong>&nbsp;⇢</strong> {word.tip3}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div>
          {' '}
          <WordList />
        </div>
      </div>
    </>
  );
};

export default WordDetail;
