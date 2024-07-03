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
      .filter(data => data.meaningENG !== correct && data.meaningENG)
      .map(data => data.meaningENG);

    let incorrectChoices = randomChoices(potentialChoices, 1);
    if (incorrectChoices.length < 1 || !incorrectChoices[0]) {
      incorrectChoices = [
        shuffledWords[(currentIndex + 1) % shuffledWords.length].meaningENG,
      ];
    }

    const shuffledChoices = shuffle([correct, ...incorrectChoices]).filter(
      choice => choice
    ); 
    setChoices(shuffledChoices);
  };

  const randomChoices = (options, number) => {
    let result = [];
    while (result.length < number && options.length > 0) {
      let index = Math.floor(Math.random() * options.length);
      result.push(options.splice(index, 1)[0]);
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
      setCurrentIndex(prevIndex => (prevIndex + 1) % shuffledWords.length);
      setScore(prevScore => prevScore + 1);
    } else {
      setLives(prevLives => Math.max(prevLives - 1, 0));
      setWrongWords(prev => [...prev, shuffledWords[currentIndex].word]);
      if (lives - 1 <= 0) setGameOver(true);
    }
  };

  const displayWord = () => {
    const { article, word } = shuffledWords[currentIndex] || {};
    return article ? `${article} ${word}` : word;
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
            <h1>{displayWord() || 'Loading word...'}</h1>
            <div className='choices'>
              {choices.length ? (
                choices.map((choice, index) => (
                  <button key={index} onClick={() => handleChoice(choice)}>
                    {choice}
                  </button>
                ))
              ) : (
                <div>Loading choices...</div>
              )}
            </div>
          </div>
        )}
        {wrongWords.length > 0 && (
          <div className='wrong-words mb-5 pb-5'>
            <h3>Falsch Wörter:</h3>
            <p>{wrongWords.join(', ')}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
