import React, { useState, useEffect } from 'react';
import './quiz.css'; 
import wordData from '../wordData';

const TestGame = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [choices, setChoices] = useState([]);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(5);
  const [gameOver, setGameOver] = useState(false);
  const [shuffledWords, setShuffledWords] = useState([]);
  const batchSize = 30;

  useEffect(() => {
    const shuffled = shuffle([...wordData]);
    const batches = createBatches(shuffled, batchSize);
    setShuffledWords(batches);
    setCurrentIndex(Math.floor(Math.random() * batches[0].length));
  }, []);

  useEffect(() => {
    if (shuffledWords.length > 0 && !gameOver) {
      generateChoices();
    }
  }, [currentIndex, shuffledWords, gameOver]);

  const createBatches = (array, size) => {
    const batches = [];
    for (let i = 0; i < array.length; i += size) {
      batches.push(array.slice(i, i + size));
    }
    return batches;
  };

  const generateChoices = () => {
    const currentBatch = shuffledWords[Math.floor(currentIndex / batchSize)];
    const currentWord = currentBatch[currentIndex % batchSize];
    if (!currentWord) {
      console.error('No current word available');
      return;
    }

    const correct = currentWord.word;
    if (!correct) {
      console.error('Correct word not available', currentWord);
      return;
    }

    let potentialChoices = shuffledWords.flat()
      .filter(data => data.word && data.word !== correct)
      .map(data => data.word);

    if (potentialChoices.length < 2) {
      console.error('Not enough potential choices available');
      return;
    }

    let incorrectChoices = randomChoices(potentialChoices, 2);
    const shuffledChoices = shuffle([correct, ...incorrectChoices]);
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
    const currentBatch = shuffledWords[Math.floor(currentIndex / batchSize)];
    const isCorrect = choice === currentBatch[currentIndex % batchSize].word;
    if (isCorrect) {
      if ((currentIndex + 1) % batchSize < currentBatch.length) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(0);
      }
      setScore(prevScore => prevScore + 1);
    } else {
      setLives(prevLives => Math.max(prevLives - 1, 0));
      if (lives - 1 <= 0) setGameOver(true);
    }
  };

  const displaySentence = () => {
    const currentBatch = shuffledWords[Math.floor(currentIndex / batchSize)];
    const currentWord = currentBatch[currentIndex % batchSize];
    if (!currentWord || !currentWord.example1) {
      return 'Loading sentence...';
    }
    return currentWord.example1.replace(currentWord.word, '______');
  };

  const resetGame = () => {
    setScore(0);
    setLives(5);
    setGameOver(false);
    setCurrentIndex(0);
    const shuffled = shuffle([...wordData]);
    const batches = createBatches(shuffled, batchSize);
    setShuffledWords(batches);
  };

  return (
    <div className="col-12 app mt-3 pt-0">
      <div className="col-12">
        <div className="scoreboard text-body-secondary">
          <div className="score-item">
            <i className="fas fa-ghost"></i>
            <span className="text-body-secondary">{lives}</span>
          </div>
          <div className="score-item">
            <i className="fas fa-check"></i>
            <span className="text-body-secondary">{score}</span>
          </div>
        </div>
        {gameOver ? (
          <div className="mb-2">
            <h1 className="d-flex justify-content-center align-items-center">
              🎯 {score}{' '}
            </h1>
            <button className="start-again-btn mt-4 mb-5" onClick={resetGame}>
              Noch einmal?
            </button>
          </div>
        ) : (
          <div className="cardCss text-body-secondary">
            <h1 className="text-body-secondary">{displaySentence()}</h1>
            <div className="choices text-body-secondary">
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
      </div>
    </div>
  );
};

export default TestGame;
