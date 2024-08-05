import React from 'react';
import { wordData } from '../Bexam.js'; // Adjust import based on your export style
import './b1exam.css';

export default function B1exam() {
  return (
    <div className='margin d-flex mobileMain justify-content-start align-items-center'>
      <div className='col-12'>
        {wordData.map((word, index) => (
          <div key={index} className='mb-4'>
            {/* Date Display */}
            {word.date && (
              <div className='d-flex justify-content-start align-items-center mb-2'>
                <p className='dateDisplay fs-5 text-primary'>
                  <strong>Date:</strong> {word.date}
                </p>
              </div>
            )}

            {/* Main text content */}
            <div className='d-flex justify-content-start align-items-center mb-0'>
              <b className='mobileWord mb-3 wordMain wordDay'>{word.text}</b>
            </div>

            <div className='word-container fs-4 mainBody mt-0 pt-0'>
              {/* Question */}
              {word.question && (
                <div className='d-flex grammarMain text-body-secondary flex-row mb-0'>
                  <div className='pt-2 ps-0 pe-2'>
                    <p className='fst-italic grammarMain text-body-secondary fs-6 ms-0 ps-0 mb-2 mt-0 pt-0'>
                      <strong>Question: </strong>{word.question}
                    </p>
                  </div>
                </div>
              )}

              {/* Example Sentences */}
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

              {/* Tips */}
              {(word.tip1 || word.tip2 || word.tip3) && (
                <div className='textWord mt-3 fs-6'>
                  <p className='tip'>&nbsp;Tips</p>
                  {word.tip1 && (
                    <p>
                      <strong>&nbsp;⇢</strong> {word.tip1}
                    </p>
                  )}
                  {word.tip2 && (
                    <p>
                      <strong>&nbsp;⇢</strong> {word.tip2}
                    </p>
                  )}
                  {word.tip3 && (
                    <p>
                      <strong>&nbsp;⇢</strong> {word.tip3}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
