import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import wordData from '../wordData';
import Footer2 from './Footer2';
import './wordApp.css';
import {
  BookIcon,
  BookmarkedIcon,
  CopyIcon,
  PrintIcon,
  VoiceIcon,
} from './IconBox';
import WordList from '../Categories/WordList';

function WordApp() {
  const [visibleWordsCount, setVisibleWordsCount] = useState(1);
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
          .meaning {
            font-style: italic;
          }
          .tip {
            font-size: 16px;
            margin-top: 20px;
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <div class="content">
          <h1>${word.word}</h1>
          <p>・${word.grammar}</p>
          <p class="meaning"><strong>&nbsp;-</strong> &nbsp;${word.meaningENG}</p>`;

    if (word.meaningTR) {
      printContent += `<p class="meaning"><strong>&nbsp;-</strong> &nbsp;${word.meaningTR}</p>`;
    }

    if (word.example1) {
      printContent += `<p><strong>‣</strong> ${word.example1}</p>`;
    }
    if (word.example2) {
      printContent += `<p><strong>‣</strong> ${word.example2}</p>`;
    }
    if (word.example3) {
      printContent += `<p><strong>‣</strong> ${word.example3}</p>`;
    }
    if (word.example4) {
      printContent += `<p><strong>‣</strong> ${word.example4}</p>`;
    }
    if (word.example5) {
      printContent += `<p><strong>‣</strong> ${word.example5}</p>`;
    }

    if (word.tip1) {
      printContent += `<p class="tip">&nbsp;Tips</p><p><strong>&nbsp;⇢</strong> ${word.tip1}</p>`;
    }
    if (word.tip2) {
      printContent += `<p><strong>&nbsp;⇢</strong> ${word.tip2}</p>`;
    }
    if (word.tip3) {
      printContent += `<p><strong>&nbsp;⇢</strong> ${word.tip3}</p>`;
    }

    printContent += `
        </div>
      </body>
    </html>`;

    const printWindow = window.open('', '');
    printWindow.document.open();
    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
    window.scrollTo(0, currentScrollPosition);
  };

  return (
    <>
      <div className='mobileMain'>
        <div className='d-flex justify-content-center align-items-center'>
          <div className='search-bar col-12 pb-2 mb-1'>
            <input
              type='text'
              className='form-control text-center fs-6 text fw-light'
              placeholder={`Suche deutsches Wort`}
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>

        {filteredWords.map((word, index) => (
          <div
            className='border-dark-subtle mainFrame mt-3 mb-3 border-bottom p-2'
            key={index}
          >
            <div className='gap-3 frameMAin frameMAinMobile d-flex justify-content-start align-items-start mb-3'>
              <button
                className=''
                onClick={() => readWordAloud(word)}
                style={{
                  border: 'none',
                  background: 'transparent',
                  cursor: 'pointer',
                }}
              >
                <VoiceIcon width='22' height='22' />
              </button>
              <button
                className='btnTop text-body-emphasis'
                onClick={() => handlePrint(word)}
              >
                <PrintIcon />
              </button>

              <button
                className='btnTop text-body-emphasis'
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

            <div className='margin d-flex frameMAin mobileMain mobileBelow flex-row'>
              {/* Sol Taraf: Kelime Detayları */}
              <div className='col-6'>
                <div className='d-flex justify-content-start align-items-center mb-0'>
                  <b className='mobileWord mb-3 wordMain wordDay'>{`${word.article} ${word.word}`}</b>
                </div>

                <div className='word-container fs-4 mainBody mt-0 pt-0'>
                  <div className='d-flex grammarMain verbText text-body-secondary flex-row mb-0'>
                    {/* Kelime Gramer Bilgileri */}
                    {word.grammar && (
                      <div className='pt-2 ps-0 pe-2'>
                        <p className='fst-italic grammarMain verbText text-body-secondary fs-6 ms-0 ps-0 mb-2 mt-0 pt-0'>
                          {word.grammar}
                        </p>
                      </div>
                    )}
                    {word.PartizipII && (
                      <div className='pt-2 pe-0'>
                        <p className='mt-0 ms-0 verbText pt-0 m-0 p-0 flex-column ms-0 me-2 fs-6 grammarMain text-body-secondary'>
                          <span className='grammarMain verbText text-body-secondary'>
                            {' '}
                            &nbsp;&nbsp; ☞ &nbsp;&nbsp;
                          </span>{' '}
                          {word.PartizipII} &nbsp;
                        </p>
                      </div>
                    )}
                    {word.Präteritum && (
                      <div className='pt-2 pe-0'>
                        <p className='ms-0 mt-0 verbText pt-0 fs-6 flex-column grammarMain text-body-secondary'>
                          <span className='grammarMain verbText text-body-secondary '>
                            {' '}
                            /&nbsp;&nbsp;
                          </span>{' '}
                          {word.Präteritum}
                        </p>
                      </div>
                    )}
                    {word.plural && (
                      <div className='pt-2 pe-0'>
                        <p className='ms-0 mt-0 pt-0 fs-6 flex-column grammarMain text-body-secondary'>
                          <span className='grammarMain text-body-secondary'>
                            &nbsp;☞ &nbsp;&nbsp;{' '}
                          </span>{' '}
                          {word.plural}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className='word-container fs-4 mainBody mt-0 pt-0'>
                  <p className='textWord meaning fst-italic mt-2'>
                    <strong>&nbsp;-</strong> &nbsp;{word.meaningENG}
                  </p>

                  {word.meaningTR && (
                    <p className='textWord fst-italic'>
                      <strong>&nbsp;-</strong> &nbsp;{word.meaningTR}
                    </p>
                  )}
                </div>
              </div>

              {/* Sağ Taraf: Örnek Cümleler */}
              <div className='exampleSentence only-mobile'>
                {/* Örnek Cümleler */}
                {word.example1 && (
                  <>
                    <p className='tip'>&nbsp;Beispielsätze</p>
                    <p className='textWord'>
                      <strong>‣</strong> {word.example1}
                    </p>
                  </>
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
              </div>
            </div>
          </div>
        ))}

        {visibleWordsCount < wordData.length && searchTerm === '' && (
          <div className='d-grid col-4 mx-auto'>
            <button
              className='loadMore text-body-emphasis'
              onClick={() => setVisibleWordsCount(prevCount => prevCount + 20)}
            >
              +50 weitere
            </button>
          </div>
        )}
      </div>

      <div className='mt-1 pt-1'>
        <WordList />
      </div>
    </>
  );
}

export default WordApp;
