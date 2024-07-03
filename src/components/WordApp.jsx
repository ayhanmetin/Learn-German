import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import wordData from '../wordData';
import './wordApp.css';
import {
  BookIcon,
  BookmarkedIcon,
  CopyIcon,
  PrintIcon,
  VoiceIcon,
} from './IconBox';

function WordApp() {
  const [visibleWordsCount, setVisibleWordsCount] = useState(20);
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
      console.log(
        `Using voice: ${speech.voice.name}, Language: ${speech.voice.lang}`
      );
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

    let printContent = `
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
        <div className="content">
          <h1>${word.word}</h1>
          <p>・${word.grammar}</p>`;

    if (word.example1) {
      printContent += `<p>‣ ${word.example1}</p>`;
    }
    if (word.example2) {
      printContent += `<p>‣ ${word.example2}</p>`;
    }
    if (word.example3) {
      printContent += `<p>‣ ${word.example3}</p>`;
    }
    if (word.example4) {
      printContent += `<p>‣ ${word.example4}</p>`;
    }
    if (word.example5) {
      printContent += `<p>‣ ${word.example5}</p>`;
    }

    printContent += `
          <p>- "${word.meaningENG}"</p>
        </div>
      </body>
    </html>`;

    const printWindow = window.open('', '_blank');
    printWindow.document.open();
    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
    window.scrollTo(0, currentScrollPosition);
  };

  return (
    <div className='col-12'>
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

      {filteredWords.map((word, index) => (
        <div className='border-bottom border-dark-subtle p-4 mb-3' key={index}>
          <div className='d-flex justify-content-center mb-3'>
            <div className='d-flex gap-3 text-body-emphasis'>
              <button
                className='btnTop ms-0 text-body-emphasis'
                onClick={() => handlePrint(word)}
              >
                <PrintIcon />
              </button>
              <button
                className='ms-2 btnTop ms-0 text-body-emphasis'
                onClick={() =>
                  navigator.clipboard.writeText(
                    `https://www.almancakelime.com/word/${word.word}`
                  )
                }
                style={{
                  border: 'none',
                  background: 'transparent',
                  cursor: 'pointer',
                }}
              >
                <CopyIcon />
              </button>
            </div>
          </div>

          <div className='d-flex justify-content-start align-items-center'>
            <div className='col-md-12'>
              <div className='d-flex justify-content-start align-items-center mb-3'>
                <b className='mobileWord wordDay fs-1'>{`${word.article} ${word.word}`}</b>
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
              <div className='d-flex justify-content-start'>
                {' '}
                <div className='word-container fs-4 mainBody'>
                  {word.grammar && (
                    <p className='fst-italic grammar fs-5 ms-0 ps-0 mb-4 mt-0 pt-0 mb-4'>
                      {word.grammar}
                    </p>
                  )}
                  {word.example1 && (
                    <p className='textWord'>
                      <strong>‣</strong> {word.example1}
                    </p>
                  )}
                  {word.example2 && (
                    <p className='textWord'>
                      <strong>‣</strong> {word.example2}
                    </p>
                  )}
                  {word.example3 && (
                    <p className='textWord'>
                      <strong>‣</strong> {word.example3}
                    </p>
                  )}
                  {word.example4 && (
                    <p className='textWord'>
                      <strong>‣</strong> {word.example4}
                    </p>
                  )}
                  {word.example5 && (
                    <p className='textWord'>
                      <strong>‣</strong> {word.example5}
                    </p>
                  )}

                  {word.tip1 && (
                    <p className='textWord mt-3'>
                      <strong>&nbsp;⇢</strong> {word.tip1}
                    </p>
                  )}
                  {word.tip2 && (
                    <p className='textWord mt-3'>
                      <strong>&nbsp;⇢</strong> {word.tip2}
                    </p>
                  )}
                  {word.tip3 && (
                    <p className='textWord mt-3'>
                      <strong>&nbsp;⇢</strong> {word.tip3}
                    </p>
                  )}
                  <p className='textWord meaning fst-italic mt-4'>
                    <strong>&nbsp;-</strong> &nbsp;{word.meaningENG}
                  </p>
                  {word.meaningTR && (
                    <p className='textWord fst-italic'>
                      <strong>&nbsp;-</strong> &nbsp;{word.meaningTR}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {visibleWordsCount < wordData.length && searchTerm === '' && (
        <div className='d-grid col-4 mx-auto'>
          <button
            className='loadMore text-body-emphasis'
            onClick={() => setVisibleWordsCount(prevCount => prevCount + 50)}
          >
            50 weitere Wörter
          </button>
        </div>
      )}
    </div>
  );
}

export default WordApp;
