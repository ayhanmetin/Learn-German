import React, { useState, useEffect } from 'react';
import './quiz.css';
import wordData from '../wordData';

const Quiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [choices, setChoices] = useState([]);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(5);
  const [wrongWords, setWrongWords] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (wordData.length > 0 && !gameOver) {
      generateChoices();
    }
  }, [currentIndex, gameOver]);

  const generateChoices = () => {
    const currentWord = wordData[currentIndex];
    if (!currentWord) return;

    const correct = currentWord.meaningENG;
    const shuffledChoices = shuffle([
      correct,
      ...randomChoices(
        wordData
          .map(data => data.meaningENG)
          .filter(meaning => meaning !== correct),
        3
      ),
    ]);
    setChoices(shuffledChoices);
  };

  const randomChoices = (options, number) =>
    options.sort(() => Math.random() - 0.5).slice(0, number);
  const shuffle = array => array.sort(() => Math.random() - 0.5);

  const handleChoice = choice => {
    const isCorrect = choice === wordData[currentIndex].meaningENG;
    if (isCorrect) {
      const nextIndex =
        currentIndex + 1 < wordData.length ? currentIndex + 1 : 0;
      setCurrentIndex(nextIndex);
      setScore(prevScore => prevScore + 10);
    } else {
      setLives(prevLives => {
        if (prevLives - 1 <= 0) {
          setGameOver(true);
        }
        return Math.max(0, prevLives - 1);
      });
      setWrongWords(prev => [...prev, wordData[currentIndex].word]);
    }
  };

  const resetGame = () => {
    setScore(0);
    setLives(5);
    setWrongWords([]);
    setCurrentIndex(0);
    setGameOver(false);
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
        {gameOver ? (
          <div className='game-over'>
            <h1>Game Over! Your score was: {score}</h1>
            <button onClick={resetGame}>Start Again</button>
          </div>
        ) : (
          <div className='card'>
            <h1>{wordData[currentIndex]?.word || 'Loading word...'}</h1>
            <div className='choices'>
              {choices.map((choice, index) => (
                <button key={index} onClick={() => handleChoice(choice)}>
                  {choice}
                </button>
              ))}
            </div>
          </div>
        )}
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
