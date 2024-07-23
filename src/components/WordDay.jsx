import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import wordData from '../wordData';

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

      const word = wordData.find(w => w.wordNo === formattedDate);
      setTodayWord(word ? `${word.article} ${word.word}` : 'No word for today');
      setTodayDate(formattedDate); // Store the formatted date for URL construction
    };

    getTodaysWord();
  }, []);

  return (
    <div className='d-flex justify-content-center align-items-center mb-2'>
      {todayWord ? (
        <Link to={`/today/${todayDate}`} className='homeCss border-bottom p-2'>
          {' '}
          Wort des Tages:
          <p className='m-0 p-0 text-center'> ☞ {todayWord}</p>
        </Link>
      ) : (
        <p>Kein Wort für heute!</p>
      )}
    </div>
  );
};

export default WordDay;
