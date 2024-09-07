import React from 'react';
import './fcard.css';
import wordData from '../wordData';

const Fcards = () => {
  const handlePrint = () => {
    window.print(); // Open the browser print dialog
  };

  return (
    <>
      <div className='print-container'>
        <span className='printF' onClick={handlePrint}>
          🖨️
        </span>
      </div>

      <div className='parent'>
        {wordData.map((word, index) => (
          <div className='card' key={index}>
            <div className='card-body'>
              <h5 className='card-title'>
                {word.article} {word.word}
              </h5>
              <div className='word-container5 fs-4 mainBody mt-0 pt-0'>
                <div className='d-flex verbText5 text-body-secondary flex-row mb-0'>
                  {word.PartizipII && (
                    <div className='pt-2 pe-0'>
                      <p className='mt-0 ms-0 verbText5 pt-0 m-0 p-0 flex-column ms-0 me-2 fs-6 text-body-secondary'>
                        <span className='verbText5 text-body-secondary'></span>{' '}
                        {word.PartizipII} &nbsp;
                      </p>
                    </div>
                  )}
                  {word.Präteritum && (
                    <div className='pt-2 pe-0'>
                      <p className='ms-0 mt-0 verbText5 pt-0 fs-6 flex-column text-body-secondary'>
                        <span className='verbText5 text-body-secondary'>
                          {' '}
                          /&nbsp;&nbsp;
                        </span>
                        {word.Präteritum}
                      </p>
                    </div>
                  )}
                  {word.plural && (
                    <div className='pt-2 pe-0'>
                      <p className='ms-0 mt-0 pt-0 fs-6 flex-column text-body-secondary'>
                        <span className='text-body-secondary'></span>{' '}
                        {word.plural}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Fcards;
