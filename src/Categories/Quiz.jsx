import React, { useState, useEffect } from 'react';
import wordData from '../wordData';

const Quiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [choices, setChoices] = useState([]);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(5);
  const [wrongWords, setWrongWords] = useState([]);

  useEffect(() => {
    if (wordData.length > 0) {
      generateChoices();
    }
  }, [currentIndex, wordData]);

  const generateChoices = () => {
    if (!wordData[currentIndex].word) {
      return;
    }
    const correct = wordData[currentIndex].meaningENG;
    const wrongOptions = wordData
      .filter((_, index) => index !== currentIndex)
      .map(data => data.meaningENG)
      .filter(meaning => meaning);
    const shuffledChoices = shuffle([
      correct,
      ...randomChoices(wrongOptions, 3),
    ]);
    setChoices(shuffledChoices);
  };

  const randomChoices = (options, number) => {
    return options.sort(() => 0.5 - Math.random()).slice(0, number);
  };

  const shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleChoice = choice => {
    if (choice === wordData[currentIndex].meaningENG) {
      setScore(score + 10);
      setCurrentIndex(
        currentIndex + 1 >= wordData.length ? 0 : currentIndex + 1
      );
    } else {
      setLives(lives - 1);
      setWrongWords(prev => [...prev, wordData[currentIndex].word]);
      if (lives <= 1) {
        alert(`Game Over! Your score was: ${score}`);
        resetGame();
      }
    }
  };

  const resetGame = () => {
    setScore(0);
    setLives(5);
    setWrongWords([]);
    setCurrentIndex(0);
  };

  return (
    <div className='app'>
      <div className='container'>
        <div className='scoreboard'>
          <div className='score-item'>
            <i className='fas fa-heart'></i>
            <span>{lives}</span>
          </div>
          <div className='score-item'>
            <i className='fas fa-star'></i>
            <span>{score}</span>
          </div>
        </div>
        <div className='card'>
          <h1>{wordData[currentIndex].word || 'Loading word...'}</h1>
          <div className='choices'>
            {choices.length > 0 ? (
              choices.map((choice, index) => (
                <button key={index} onClick={() => handleChoice(choice)}>
                  {choice}
                </button>
              ))
            ) : (
              <p>Loading choices...</p>
            )}
          </div>
        </div>
        {wrongWords.length > 0 && (
          <div className='wrong-words'>
            <h3>Words to Review:</h3>
            <p>{wrongWords.join(', ')}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;