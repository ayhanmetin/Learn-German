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
    if (!currentWord) {
      console.error('No current word available');
      return;
    }

    const correct = currentWord.meaningENG;
    if (!correct) {
      console.error('Correct meaning not available', currentWord);
      return;
    }

    const potentialChoices = shuffledWords
      .filter(data => data.meaningENG && data.meaningENG !== correct)
      .map(data => data.meaningENG);

    if (!potentialChoices.length) {
      console.error('No potential choices available', shuffledWords);
      return;
    }

    let incorrectChoices = randomChoices(potentialChoices, 1);
    if (incorrectChoices.length < 1 || !incorrectChoices[0]) {
      console.error(
        'Failed to select an incorrect choice, using fallback',
        potentialChoices
      );
      const fallbackChoice = shuffledWords.find(
        data => data.meaningENG && data.meaningENG !== correct
      );
      incorrectChoices = [
        fallbackChoice
          ? fallbackChoice.meaningENG
          : 'No incorrect choice available',
      ];
    }

    const shuffledChoices = shuffle([correct, ...incorrectChoices]);
    if (shuffledChoices.includes(undefined) || shuffledChoices.includes(null)) {
      console.error(
        'Shuffled choices include undefined or null',
        shuffledChoices
      );
    }

    setChoices(
      shuffledChoices.filter(
        choice => typeof choice === 'string' && choice.trim() !== ''
      )
    );
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
      <div className='col-12'>
        <div className='scoreboard text-body-secondary'>
          <div className='score-item'>
            <i className='fas fa-heart'></i>
            <span className='text-body-secondary'>{lives}</span>
          </div>
          <div className='score-item'>
            <i className='fas fa-star'></i>
            <span className='text-body-secondary'>{score}</span>
          </div>
        </div>
        {gameOver ? (
          <div className='mb-2'>
            <h1 className='d-flex justify-content-center align-items-center'>
              🎯 {score}{' '}
            </h1>
            <button className='start-again-btn mt-4 mb-5' onClick={resetGame}>
              Noch einmal?
            </button>
          </div>
        ) : (
          <div className='cardCss text-body-secondary'>
            <h1 className='text-body-secondary'>{displayWord() || 'Loading word...'}</h1>
            <div className='choices text-body-secondary'>
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
          <div className='wrong-words text-body-secondary ms-4 mb-5 pb-5'>
            <h3 className='fs-5'>🏴‍☠️ {wrongWords.join(', ')}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
