import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import wordData from '../wordData';
import '../components/wordApp.css';
import { BookIcon, PrintIcon, VoiceIcon } from '../components/IconBox';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function Basics() {
  <Analytics />;
  const [filteredWords, setFilteredWords] = useState(() => {
    const basicsWords = wordData.filter(word => word.tag === 'basics');
    return shuffleArray([...basicsWords]);
  });
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
    const femaleVoices = populateVoices();
    if (femaleVoices.length > 0) {
      speech.voice = femaleVoices[0];
    } else {
      console.log('No female voices available.');
    }
    window.speechSynthesis.speak(speech);
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
        <div class="content">
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
          <p>- "${word.meaningTR}"</p>
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
    <div className='container col-12'>
      {filteredWords.map(word => (
        <div
          className='border-bottom border-dark-subtle p-4 mb-3'
          key={word.id}
        >
          <div className='d-flex justify-content-center mb-3'>
            <div className='d-flex gap-3 text-body-emphasis'>
              <button
                className='btnTop ms-0 text-body-emphasis'
                onClick={() => handlePrint(word)}
              >
                <PrintIcon />
              </button>
              {/* <button className='btnTop btnTop1 ms-0 text-body-emphasis'>
                <BookIcon />
              </button> */}
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
                <p className='fst-italic text-body-emphasis fs-6 ms-0 ps-0 mb-4 mt-0 pt-0 mb-4'>
                  {word.grammar}
                </p>
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
                <p className='textWord fst-italic mt-4'>
                  <strong>&nbsp;-</strong> &nbsp;{`"${word.meaningENG}"`}
                </p>
                <p className='textWord fst-italic'>
                  <strong>&nbsp;-</strong> &nbsp;{`"${word.meaningTR}"`}
                </p>
                {word.tip && (
                  <p className='textWord mt-3'>
                    <strong>&nbsp;⇢</strong> {word.tip}
                  </p>
                )}
              </div>
            </div>

            <div className='col-md-4'>
              <div className='custom-image-container mt-0 mb-2'>
                <img
                  src={word.image}
                  className='custom-image mt-2'
                  alt={`${word.word}`}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Basics;
