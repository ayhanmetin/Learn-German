import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import wordData from '../wordData';
import './wordApp.css';

function WordApp() {
  const [visibleWordsCount, setVisibleWordsCount] = useState(5);

  useEffect(() => {
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = populateVoices;
    }
  }, []);

  // Function to populate voices and set a default female voice if available

  const populateVoices = () => {
    let voices = window.speechSynthesis.getVoices();
    return voices.filter(
      voice =>
        voice.gender === 'female' || voice.name.toLowerCase().includes('female')
    );
  };

  // Function to handle reading the word out loud

  const readWordAloud = text => {
    const speech = new SpeechSynthesisUtterance(text);
    let voices = populateVoices();
    if (voices.length > 0) {
      speech.voice = voices[0]; // Set to the first female voice found
    }
    window.speechSynthesis.speak(speech);
  };

  const loadMoreWords = () => {
    setVisibleWordsCount(prevCount => prevCount + 5);
  };

  return (
    
    <div className='container col-12'>
      {wordData.slice(0, visibleWordsCount).map(word => (
        <div className='border-bottom mb-4' key={word.id}>
          <div className=''>
            <div className='d-flex textWord1 mb-3 justify-content-center'>
              Word of the Day : {word.date}
            </div>
            <div className='d-flex justify-content-center'>
              <div
                className='col-4'
                style={{ borderBottom: '1px solid #336079' }}
              ></div>
            </div>{' '}
            <b className='d-flex wordDay justify-content-center'>
              {word.word}{' '}
              <span
                onClick={() => readWordAloud(word.word)}
                style={{ cursor: 'pointer', marginLeft: '5px' }}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='46'
                  height='36'
                  fill='currentColor'
                  className='bi bi-volume-up-fill'
                  viewBox='0 0 16 16'
                >
                  <path d='M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z' />
                  <path d='M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z' />
                  <path d='M8.707 11.182A4.5 4.5 0 0 0 10.025 8a4.5 4.5 0 0 0-1.318-3.182L8 5.525A3.5 3.5 0 0 1 9.025 8 3.5 3.5 0 0 1 8 10.475zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06' />
                </svg>
              </span>
            </b>
          </div>

          <p className='fst-italic textWord1 mb-5 d-flex justify-content-center'>
            {word.grammar}
          </p>
          <div className='textWord1 mb-3'>Example</div>
          <p className='textWord'>
            <b>Example 1:</b> {word.example1}
          </p>
          <p className='textWord'>
            <b>Example 2:</b> {word.example2}
          </p>
          <p className='textWord'>
            <b>Eng:</b> {word.meaningENG}
          </p>
          <p>
            <b>Tr:</b> {word.meaningTR}
          </p>
        </div>
      ))}

      {visibleWordsCount < wordData.length && (
        <div className='d-grid gap-2 col-6 mx-auto'>
          <button className='btn btn-sm btn-primary' onClick={loadMoreWords}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default WordApp;
