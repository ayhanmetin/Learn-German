import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import wordData from '../wordData';
import WordList from './WordList';
import './wordDetail.css';
import { CopyIcon, PrintIcon, VoiceIcon } from '../components/IconBox';

const WordDetail = () => {
  const { wordName } = useParams();
  const decodedWord = decodeURIComponent(wordName);
  const word = wordData.find(w => w.word === decodedWord);
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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [decodedWord]);

  if (!word) {
    return <div>Word not found.</div>;
  }

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
            width: 80%;
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
      <div className='d-flex px-2 mobileMain flex-column mb-5 mt-0 pt-3'>
        <div className='margin frameMAin d-flex mobileMain justify-content-start align-items-center'>
          <div className='col-12 border-bottom border-top px-3 pt-2'>
            <div className='d-flex frameMAinMobile justify-content-start mb-3'>
              <div className='d-flex gap-3 margin d-flex justify-content-start align-items-start text-body-emphasis'>
                <button
                  className='position-relative'
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

            <div className='margin d-flex frameMAin mobileMain mobileBelow flex-row'>
              {/* Sol Taraf: Kelime Detayları */}
              <div className='col-6'>
                <div className='d-flex justify-content-start align-items-center mb-0'>
                  <b className='mobileWord mb-3 wordMain wordDay'>{`${word.article} ${word.word}`}</b>
                </div>

                {word.grammar && (
                  <div className='pt-2 ps-0 pe-2'>
                    <p className='verbText text-body-secondary fs-6 ms-0 ps-0 mb-2 mt-0 pt-0'>
                      ✏︎ &nbsp;&nbsp; {word.grammar}
                    </p>
                  </div>
                )}
                <div className='word-container fs-4 mainBody mt-0 pt-0'>
                  <div className='d-flex  verbText text-body-secondary flex-row mb-0'>
                    {/* Kelime Gramer Bilgileri */}

                    {word.PartizipII && (
                      <div className='pt-2 pe-0'>
                        <p className='mt-0 ms-0 verbText pt-0 m-0 p-0 flex-column ms-0 me-2 fs-6  text-body-secondary'>
                          <span className=' verbText text-body-secondary'>
                            {' '}
                          </span>{' '}
                          {word.PartizipII} &nbsp;
                        </p>
                      </div>
                    )}
                    {word.Präteritum && (
                      <div className='pt-2 pe-0'>
                        <p className='ms-0 mt-0 verbText pt-0 fs-6 flex-column  text-body-secondary'>
                          <span className=' verbText text-body-secondary '>
                            {' '}
                            /&nbsp;&nbsp;
                          </span>{' '}
                          {word.Präteritum}
                        </p>
                      </div>
                    )}
                    {word.plural && (
                      <div className='pt-2 pe-0'>
                        <p className='ms-0 mt-0 pt-0 fs-6 flex-column  text-body-secondary'>
                          <span className=' text-body-secondary'></span>{' '}
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
        </div>
      </div>
      <div className='mt-1 text-center p-0 m-0 pt-1'>
        <WordList />
      </div>
    </>
  );
};

export default WordDetail;
