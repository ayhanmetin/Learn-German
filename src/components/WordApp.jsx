import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import wordData from '../wordData';
import './wordApp.css';
import { BookIcon, PrintIcon, VoiceIcon } from './IconBox';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { NavLink } from 'react-router-dom';

function WordApp() {
  const [visibleWordsCount, setVisibleWordsCount] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredWords, setFilteredWords] = useState([]);
  const [voices, setVoices] = useState([]);

  useEffect(() => {
    const loadVoices = () => {
      setVoices(window.speechSynthesis.getVoices());
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  const populateVoices = () => {
    return voices.filter(
      voice =>
        voice.gender === 'female' || voice.name.toLowerCase().includes('female')
    );
  };

  const readWordAloud = word => {
    const speech = new SpeechSynthesisUtterance(word.word);
    const germanVoices = populateVoices().filter(
      voice => voice.lang === 'de-DE'
    );
    if (germanVoices.length > 0) {
      speech.voice = germanVoices[0];
      console.log(`Using voice: ${speech.voice.name}, Language: ${speech.voice.lang}`);
    } else {
      console.log('No German voices available.');
    }
    speech.lang = 'de-DE';
    window.speechSynthesis.speak(speech);
};


  useEffect(() => {
    setFilteredWords(wordData.slice(0, visibleWordsCount));
  }, [visibleWordsCount]);

  const handleSearch = event => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    if (value.trim()) {
      const newFilteredWords = wordData.filter(
        word =>
          word.word.toLowerCase().includes(value) ||
          word.meaningENG.toLowerCase().includes(value) ||
          word.meaningTR.toLowerCase().includes(value)
      );
      setFilteredWords(newFilteredWords);
    } else {
      setFilteredWords(wordData.slice(0, visibleWordsCount));
    }
  };

  const handlePrint = word => {
    const currentScrollPosition = window.scrollY;
    const printContent = `
    <html>
      <head>
        <title>Print</title>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 20px;
            display: flex;
            justify-content: center;
          }
          .content {
            text-align: left;
            width: 80%; /* Adjust width as needed for your design preference */
          }
          h1 {
            font-size: 24px;
            margin-top: 20px;
          }
          p {
            font-size: 18px;
            margin: 10px 0;
          }
          .header {
            font-size: 20px;
            font-weight: bold;
            margin-top: 30px;
          }
        </style>
      </head>
      <body>
        <div class="content">
          <h1>${word.word}</h1>
          <p>${word.grammar}</p>
          <p>Example 1: ${word.example1}</p>
          <p>Example 2: ${word.example2}</p>
          <p>English: ${word.meaningENG} </p>
          <p>Türkce: ${word.meaningTR}</p>
          <p>Date: ${new Date().toLocaleDateString()}</p>
        </div>
      </body>
    </html>`;

    const printWindow = window.open('', '', 'height=800,width=1000');
    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.print();
    printWindow.onafterprint = () => {
      printWindow.close();
      window.scrollTo(0, currentScrollPosition);
    };
  };

  return (
    <div className='container col-12'>
      <div className='container d-flex justify-content-center align-items-center'>
        <div className='search-bar pb-2 mb-1 col-10'>
          <input
            type='text'
            className='form-control text-start fs-6 text fw-light'
            placeholder={`Search`}
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>

      {filteredWords.map(word => (
        <div
          className='border-bottom border-dark-subtle p-4 mb-3'
          key={word.id}
        >
          <div className='d-flex justify-content-center mb-3'>
            <div
              className='textWord1 fs-7 mt-1 text ms-0 me-3 position-relative'
              style={{ top: '2px' }}
            >
              {word.date}
            </div>
            <div className='d-flex gap-3 text-body-emphasis'>
              <button
                className='btnTop ms-0 text-body-emphasis'
                onClick={() => handlePrint(word)}
              >
                <PrintIcon />
              </button>
              <button className='btnTop btnTop1 ms-0 text-body-emphasis'>
                <BookIcon />
              </button>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-8'>
              <div className='d-flex justify-content-start align-items-center mb-3'>
                <b className='mobileWord wordDay'>{`${word.article} ${word.word}`}</b>
                <button
                  className='ms-2 position-relative'
                  onClick={() => readWordAloud(word)}
                  style={{
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer',
                  }}
                >
                  <VoiceIcon width='22' height='22' />
                </button>
              </div>

              <div className='word-container'>
                <p className='fst-italic textWord1 mb-3 mt-0 pt-0 mb-4'>
                  {word.grammar}
                </p>
                <p className='textWord'>
                  <strong>Example 1:</strong> {word.example1}
                </p>
                <p className='textWord'>
                  <strong>Example 2:</strong> {word.example2}
                </p>
                <p className='textWord'>
                  <strong>Eng:</strong> {word.meaningENG}
                </p>
                <p className='textWord'>
                  <strong>Tr:</strong> {word.meaningTR}
                </p>
              </div>
            </div>

            <div className='col-md-4'>
              <div className='custom-image-container mt-0 mb-2'>
                <img
                  src={word.image}
                  className='custom-image mt-2'
                  alt={`Image depicting the word ${word.word}`}
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      {visibleWordsCount < wordData.length && searchTerm === '' && (
        <div className='d-grid col-4 mx-auto'>
          <button
            className='loadMore text-body-emphasis'
            onClick={() => setVisibleWordsCount(prevCount => prevCount + 5)}
          >
            50 weitere Wörter
          </button>
        </div>
      )}
    </div>
  );
}

export default WordApp;
