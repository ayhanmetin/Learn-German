import React from 'react';
import wordData from '../wordData';

const WordDetail = ({ index }) => {
  const word = wordData[index];

  const wordDayStyle = {
    fontFamily: "'Libre Franklin', sans-serif",
    fontSize: '31px',
  };

  return (
    <div className='container mb-5 mt-0 pt-3 border-top border-bottom'>
      <div className='word-container fs-4 mainBody'>
        <b className='mobileWord fs-1 wordDay' style={wordDayStyle}>
          {`${word.article} ${word.word}`}
        </b>
        {word.grammar && (
          <p className='fst-italic mt-3 grammar fs-6 ms-0 ps-0 mb-4 mt-0 pt-0 mb-4'>
            {word.grammar}
          </p>
        )}
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
        {word.tip1 && (
          <p className='textWord mt-3'>
            <strong>&nbsp;⇢</strong> {word.tip1}
          </p>
        )}
        {word.tip2 && (
          <p className='textWord mt-3'>
            <strong>&nbsp;⇢</strong> {word.tip2}
          </p>
        )}
        {word.tip3 && (
          <p className='textWord mt-3'>
            <strong>&nbsp;⇢</strong> {word.tip3}
          </p>
        )}
        <p className='textWord meaning fst-italic mt-4'>
          <strong>&nbsp;-</strong> &nbsp;{word.meaningENG}
        </p>
        {word.meaningTR && (
          <p className='textWord fst-italic'>
            <strong>&nbsp;-</strong> &nbsp;{word.meaningTR}
          </p>
        )}
      </div>
    </div>
  );
};

export default WordDetail;
