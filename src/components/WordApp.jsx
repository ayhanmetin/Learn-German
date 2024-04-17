import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import wordData from '../wordData';
import './wordApp.css';

function WordApp() {
  const [visibleWordsCount, setVisibleWordsCount] = useState(5);

  // Function to handle reading the word out loud
  const readWordAloud = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
  };

  const loadMoreWords = () => {
    setVisibleWordsCount(prevCount => prevCount + 5);
  };

  return (
    <div className='container col-12'>
      {wordData.slice(0, visibleWordsCount).map(word => (
        <div className='border-bottom mb-4' key={word.id}>
          <p className=''>
            <b>Word of the Day:</b> {word.word}
            <span onClick={() => readWordAloud(word.word)} style={{ cursor: 'pointer' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-volume-up-fill" viewBox="0 0 16 16" style={{ marginLeft: '5px' }}>
                <path d="M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z"/>
                <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z"/>
                <path d="M8.707 11.182A4.5 4.5 0 0 0 10.025 8a4.5 4.5 0 0 0-1.318-3.182L8 5.525A3.5 3.5 0 0 1 9.025 8 3.5 3.5 0 0 1 8 10.475zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06"/>
              </svg>
            </span>
          </p>
          <p>
            <b>Date:</b> {word.date}
          </p>
          <h2 className=''>
            {word.word}
          </h2>
          <p>
            <b>Exp 1:</b> {word.example1}
          </p>
          <p>
            <b>Exp 2:</b> {word.example2}
          </p>
          <p>
            <b>Eng:</b> {word.meaningENG}
          </p>
          <p>
            <b>Tr:</b> {word.meaningTR}
          </p>
        </div>
      ))}
      {visibleWordsCount < wordData.length && (
        <button className="btn btn-primary" onClick={loadMoreWords}>
          Load More
        </button>
      )}
    </div>
  );
}

export default WordApp;
