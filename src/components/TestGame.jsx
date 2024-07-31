import React, { useState, useEffect } from 'react';
import '../Categories/quiz.css';
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
    const filteredWords = wordData.filter(
      word =>
        word.example1 ||
        word.example2 ||
        word.example3 ||
        word.example4 ||
        word.example5
    );
    const shuffled = shuffle([...filteredWords]);
    const batches = createBatches(shuffled, batchSize);
    setShuffledWords(batches);
    setCurrentIndex(0); // Start at the first word
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
    const currentWord = currentBatch?.[currentIndex % batchSize];

    if (!currentWord) {
      console.error('No current word available');
      return;
    }

    const correctForm = getCorrectForm(currentWord);
    const distractorWord = 'präferieren'; // Example distractor word

    // Check if correct form is found
    if (correctForm) {
      const shuffledChoices = shuffle([correctForm, distractorWord]);
      setChoices(shuffledChoices);
    } else {
      // Handle missing correct form: Skip to next word
      if ((currentIndex + 1) % batchSize < currentBatch.length) {
        setCurrentIndex(currentIndex + 1);
      } else if (currentIndex + 1 < shuffledWords.flat().length) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setGameOver(true); // End game if there are no more words
      }
    }
  };

  const getCorrectForm = word => {
    const { word: infinitive, Präteritum, PartizipII, example1 } = word;

    if (example1.includes(infinitive)) return infinitive;
    if (example1.includes(Präteritum)) return Präteritum;
    if (example1.includes(PartizipII)) return PartizipII;

    return infinitive; // Default to the infinitive if nothing else matches
  };

  const displaySentence = () => {
    const currentBatch = shuffledWords[Math.floor(currentIndex / batchSize)];
    const currentWord = currentBatch?.[currentIndex % batchSize];

    if (!currentWord) {
      return 'Loading sentence...';
    }

    const correctForm = getCorrectForm(currentWord);
    const sentence = currentWord.example1;

    return sentence.replace(correctForm, '______');
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
      } else if (currentIndex + 1 < shuffledWords.flat().length) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setGameOver(true); // End game if there are no more words
      }
      setScore(prevScore => prevScore + 1);
    } else {
      const newLives = lives - 1;
      setLives(newLives);
      if (newLives <= 0) setGameOver(true);
    }
  };

  const resetGame = () => {
    setScore(0);
    setLives(5);
    setGameOver(false);
    setCurrentIndex(0);
    const filteredWords = wordData.filter(
      word =>
        word.example1 ||
        word.example2 ||
        word.example3 ||
        word.example4 ||
        word.example5
    );
    const shuffled = shuffle([...filteredWords]);
    const batches = createBatches(shuffled, batchSize);
    setShuffledWords(batches);
  };

  return (
    <div className='col-12 app mt-3 pt-0'>
      <div className='col-12'>
        <div className='scoreboard text-body-secondary'>
          <div className='score-item'>
            <i className='fas fa-ghost'></i>
            <span className='text-body-secondary'>{lives}</span>
          </div>
          <div className='score-item'>
            <i className='fas fa-check'></i>
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
          <div className='cardCss2 text-body-secondary'>
            <h5
              className='text-body-secondary mb-3'
              style={{ fontSize: '16px' }}
            >
              {displaySentence()}
            </h5>
            <div className='choices2 text-body-secondary d-flex justify-content-around'>
              {choices.length ? (
                choices.map((choice, index) => (
                  <button
                    key={index}
                    className='no-hover-button'
                    style={{ minWidth: '120px' }}
                    onClick={() => handleChoice(choice)}
                  >
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
