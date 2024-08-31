import React, { useState, useEffect } from 'react';
import './quiz.css';
import wordData from '../wordData';
import Footer2 from '../components/Footer2';

const Quiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [choices, setChoices] = useState([]);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(5);
  const [wrongWords, setWrongWords] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [shuffledWords, setShuffledWords] = useState([]);
  const [batchIndex, setBatchIndex] = useState(0);
  const batchSize = 30;

  useEffect(() => {
    const shuffled = shuffle([...wordData]);
    console.log('Initial shuffle:', shuffled);
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
    if (!shuffledWords[batchIndex]) {
      console.error('No current batch available');
      return;
    }
    const currentBatch = shuffledWords[batchIndex];
    const currentWord = currentBatch[currentIndex];
    if (!currentWord) {
      console.error('No current word available');
      return;
    }

    const correct = currentWord.meaningENG;
    if (!correct) {
      console.error('Correct meaning not available', currentWord);
      return;
    }

    let potentialChoices = currentBatch
      .filter(data => data.meaningENG && data.meaningENG !== correct)
      .map(data => data.meaningENG);

    if (!potentialChoices.length) {
      console.error('No potential choices available', currentBatch);
      return;
    }

    let incorrectChoices = randomChoices(potentialChoices, 1);
    if (incorrectChoices.length < 1 || !incorrectChoices[0]) {
      console.error(
        'Failed to select an incorrect choice, using fallback',
        potentialChoices
      );
      incorrectChoices = [
        currentBatch.find(
          data => data.meaningENG && data.meaningENG !== correct
        )?.meaningENG || 'No incorrect choice available',
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
    const currentBatch = shuffledWords[batchIndex];
    const isCorrect = choice === currentBatch[currentIndex].meaningENG;
    if (isCorrect) {
      if (currentIndex + 1 < currentBatch.length) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setBatchIndex((batchIndex + 1) % shuffledWords.length);
        setCurrentIndex(0);
      }
      setScore(prevScore => prevScore + 1);
    } else {
      setLives(prevLives => Math.max(prevLives - 1, 0));
      setWrongWords(prev => [...prev, currentBatch[currentIndex].word]);
      if (lives - 1 <= 0) setGameOver(true);
    }
  };

  const displayWord = () => {
    if (!shuffledWords[batchIndex]) {
      return 'Loading word...';
    }

    const currentBatch = shuffledWords[batchIndex];
    const currentWord = currentBatch[currentIndex] || {};
    const {
      article,
      word,
      grammar,
      PartizipII,
      Präteritum,
      plural,
      meaningENG,
      meaningTR,
      example1,
      example2,
      example3,
      example4,
      example5,
      tip1,
      tip2,
      tip3,
    } = currentWord;

    return (
      <div className='margin d-flex mobileMain justify-content-start align-items-start'>
        <div className='col-12'>
          <div className='d-flex justify-content-center align-items-center mb-3'>
            <b className='mobileWord mb-3 wordDayQuiz'>
              {article ? `${article} ${word}` : word}
            </b>
          </div>

          <div className='d-flex justify-content-start'>
            <div className='fs-4 mt-0 ms-0 pt-0 m-0 p-0 mt-0 pt-0'>
              <div className='quizSentence col-12 d-flex flex-column mb-3'>
                {' '}
                {example1 && (
                  <p className='textWordQuiz d-flex justify-content-start align-items-start fw-normal'>
                    <div className='d-flex flex-column'>
                      {example1 && (
                        <div className='d-flex'>
                          <strong>‣</strong> {example1}
                        </div>
                      )}
                      {example2 && (
                        <div className='d-flex'>
                          <strong>‣</strong> {example2}
                        </div>
                      )}
                      {example3 && (
                        <div className='d-flex'>
                          <strong>‣</strong> {example3}
                        </div>
                      )}
                      {example4 && (
                        <div className='d-flex'>
                          <strong>‣</strong> {example4}
                        </div>
                      )}
                      {example5 && (
                        <div className='d-flex'>
                          <strong>‣</strong> {example5}
                        </div>
                      )}
                    </div>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const resetGame = () => {
    setScore(0);
    setLives(5);
    setWrongWords([]);
    setCurrentIndex(0);
    setGameOver(false);
    const shuffled = shuffle([...wordData]);
    console.log('Shuffle on reset:', shuffled);
    const batches = createBatches(shuffled, batchSize);
    setShuffledWords(batches);
    setBatchIndex(0);
  };

  return (
    <>
      <div className='col-12 border-top pt-3 app mt-1 pt-0'>
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
              <h1 className='d-flex scoreQuiz justify-content-center align-items-center'>
                🎯 {score}{' '}
              </h1>
              <button className='start-again-btn mt-4 mb-5' onClick={resetGame}>
                Noch einmal?
              </button>
            </div>
          ) : (
            <div className='cardCss fs-1 textchoicesFont1 text-body-secondary'>
              <h1 className='text-body-secondary choicesFont1 fs-1 text fw-medium mb-0'>
                {displayWord()}
              </h1>
              <div className='choices text-body-secondary'>
                {choices.length ? (
                  choices.map((choice, index) => (
                    <button
                      className='choicesFont fw-normal'
                      key={index}
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
          {wrongWords.length > 0 && (
            <div className='wrong-words text-body-secondary ms-4 mb-5 pb-5'>
              <p className='wrong-words d-flex fs-4 justify-content-center align-items-center'>
                🏴‍☠️
                {wrongWords.map((word, index) => (
                  <a
                    key={index}
                    href={`https://www.almancakelime.com/word/${word}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{
                      textDecoration: 'none',
                      color: 'inherit',
                      cursor: 'pointer',
                      padding: '0',
                      margin: '0 5px',
                    }}
                  >
                    {word}
                    {index < wrongWords.length - 1 ? ', ' : ''}
                  </a>
                ))}
              </p>
            </div>
          )}
        </div>
      </div>
      <div className='mt-5 pt-5 footer'>
        <Footer2 />
      </div>
    </>
  );
};

export default Quiz;
