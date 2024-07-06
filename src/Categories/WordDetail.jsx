import React from 'react';
import { useParams } from 'react-router-dom';
import wordData from '../wordData';
import WordList from './WordList';

const WordDetail = () => {
  const { wordName } = useParams();
  const decodedWord = decodeURIComponent(wordName);
  const word = wordData.find(w => w.word === decodedWord);

  if (!word) {
    return <div>Word not found.</div>;
  }

  const wordDayStyle = {
    fontFamily: "'Libre Franklin', sans-serif",
    fontSize: '31px',
  };

  return (
    <>
      <div className='col-11 d-flex flex-column mb-5 mt-0 pt-3'>
        <div className='word-container fs-5 mainBody mb-4'>
          <b className='mobileWord fs-2 wordDay' style={wordDayStyle}>
            {`${word.article} ${word.word}`}
          </b>
          {word.grammar && (
            <p className='fst-italic mt-2 grammar fs-6 ms-0 ps-0 mb-4'>
              {word.grammar}
            </p>
          )}
          {word.example1 && (
            <p className='textWord fs-6'>
              <strong>‣</strong> {word.example1}
            </p>
          )}
          {word.example2 && (
            <p className='textWord fs-6'>
              <strong>‣</strong> {word.example2}
            </p>
          )}
          {word.example3 && (
            <p className='textWord fs-6'>
              <strong>‣</strong> {word.example3}
            </p>
          )}
          {word.example4 && (
            <p className='textWord fs-6'>
              <strong>‣</strong> {word.example4}
            </p>
          )}
          {word.example5 && (
            <p className='textWord fs-6'>
              <strong>‣</strong> {word.example5}
            </p>
          )}
          {word.tip1 && (
            <p className='textWord fs-6 mt-3'>
              <strong>⇢</strong> {word.tip1}
            </p>
          )}
          {word.tip2 && (
            <p className='textWord fs-6 mt-3'>
              <strong>⇢</strong> {word.tip2}
            </p>
          )}
          {word.tip3 && (
            <p className='textWord fs-6 mt-3'>
              <strong>⇢</strong> {word.tip3}
            </p>
          )}
          <p className='textWord meaning fs-6 fst-italic mt-4'>
            <strong>-</strong> {word.meaningENG}
          </p>
          {word.meaningTR && (
            <p className='textWord fs-6 fst-italic'>
              <strong>-</strong> {word.meaningTR}
            </p>
          )}
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
