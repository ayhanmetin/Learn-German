import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import wordData from '../wordData';
import './wordday.css';

const WordDay = () => {
  const [todayWord, setTodayWord] = useState('');
  const [todayDate, setTodayDate] = useState('');

  useEffect(() => {
    const getTodaysWord = () => {
      const today = new Date();
      const formattedDate = `${today.getDate().toString().padStart(2, '0')}${(
        today.getMonth() + 1
      )
        .toString()
        .padStart(2, '0')}${today.getFullYear().toString().slice(2)}`;

      console.log('Formatted date:', formattedDate);

      const word = wordData.find(w => w.wordNo === formattedDate);
      console.log('Word found:', word);

      setTodayWord(word ? `${word.article} ${word.word}` : 'No word for today');
      setTodayDate(formattedDate);
    };

    getTodaysWord();
  }, []);

  return (
    <div className='d-flex flex-column justify-content-center align-items-center mb-2'>
      {todayWord ? (
        <>
          <p className='wortTitle'>✏︎ Wort des Tages</p>
          <Link
            to={`/today/${todayDate}`}
            className='homeCss border-bottom p-2'
          >
            {' '}
            <p className='m-0 fs-3 p-0 text-center'>{todayWord}</p>
          </Link>
        </>
      ) : (
        <p>Kein Wort für heute!</p>
      )}
    </div>
  );
};

export default WordDay;
