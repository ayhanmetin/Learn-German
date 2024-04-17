import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import wordData from '../wordData';
import './wordApp.css';

function WordApp() {
  const [visibleWordsCount, setVisibleWordsCount] = useState(5);  // State to manage the number of words displayed

  const loadMoreWords = () => {
    setVisibleWordsCount(prevCount => prevCount + 5);  // Increase the count by 50 each time the button is clicked
  };

  return (
    <div className='container col-12'>
      {wordData.slice(0, visibleWordsCount).map(word => (  // Only slice the number of words to be displayed
        <div className='border-bottom mb-4' key={word.id}>
          <p className=''>
            <b>Word of the Day:</b> {word.word}
          </p>
          <p className=''>
            <b>Date:</b> {word.date}
          </p>
          <h2 className=''>{word.word}</h2>
          <p>
            <b>Exp 1:</b> {word.example1}
          </p>
          <p>
            <b>Exp 2:</b> {word.example2}  // Fix from example1 to example2
          </p>
          <p>
            <b>Eng:</b> {word.meaningENG}
          </p>
          <p>
            <b>Tr:</b> {word.meaningTR}
          </p>
        </div>
      ))}
      {visibleWordsCount < wordData.length && (  // Only show the button if there are more words to load
        <button className="btn btn-primary" onClick={loadMoreWords}>
          Load More
        </button>
      )}
    </div>
  );
}

export default WordApp;
