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
  const [shuffledWords, setShuffledWords] = useState([]);

  useEffect(() => {
    setShuffledWords(shuffle([...wordData]));
  }, []);

  useEffect(() => {
    if (shuffledWords.length > 0 && !gameOver) {
      generateChoices();
    }
  }, [currentIndex, shuffledWords, gameOver]);

  const generateChoices = () => {
    const currentWord = shuffledWords[currentIndex];
    if (!currentWord) return;

    const correct = currentWord.meaningENG;
    const potentialChoices = shuffledWords
      .map(data => data.meaningENG)
      .filter(meaning => meaning !== correct);

    // Ensure at least one incorrect choice is available
    let incorrectChoices = randomChoices(potentialChoices, 1);
    if (incorrectChoices.length < 1) {
      incorrectChoices = [shuffledWords[(currentIndex + 1) % shuffledWords.length].meaningENG];
    }

    const shuffledChoices = shuffle([correct, ...incorrectChoices]);
    setChoices(shuffledChoices);
  };

  const randomChoices = (options, number) => {
    let result = [];
    let count = options.length;
    while (result.length < number && count > 0) {
      let index = Math.floor(Math.random() * options.length);
      result.push(options.splice(index, 1)[0]);
      count--;
    }
    return result;
  };

  const shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleChoice = choice => {
    const isCorrect = choice === shuffledWords[currentIndex].meaningENG;
    if (isCorrect) {
      setCurrentIndex(currentIndex + 1 < shuffledWords.length ? currentIndex + 1 : 0);
      setScore(prevScore => prevScore + 10);
    } else {
      setLives(prevLives => prevLives - 1 <= 0 ? 0 : prevLives - 1);
      setWrongWords(prev => [...prev, shuffledWords[currentIndex].word]);
      if (lives - 1 <= 0) setGameOver(true);
    }
  };

  const resetGame = () => {
    setScore(0);
    setLives(5);
    setWrongWords([]);
    setCurrentIndex(0);
    setGameOver(false);
    setShuffledWords(shuffle([...wordData]));
  };

  return (
    <div className='col-12 app mt-3 pt-0'>
      <div className='col-10'>
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
          <div className='mb-2'>
            <h1 className='game-over'>Score: {score}</h1>
            <button className='start-again-btn mt-4' onClick={resetGame}>
            Noch einmal?
            </button>
          </div>
        ) : (
          <div className='card'>
            <h1>{shuffledWords[currentIndex]?.word || 'Loading word...'}</h1>
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
            <h3>Falsch wörter:</h3>
            <p>{wrongWords.join(', ')}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
