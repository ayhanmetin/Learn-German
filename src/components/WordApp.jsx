import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import wordData from '../wordData';
import './wordApp.css';
import { BookIcon, PrintIcon, VoiceIcon } from './IconBox';

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
    const femaleVoices = populateVoices();
    if (femaleVoices.length > 0) {
      speech.voice = femaleVoices[0];
    } else {
      console.log('No female voices available.');
    }
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
    const printContent = `<h1>${word.word}</h1>
      <p>Grammar: ${word.grammar}</p>
      <p>English: ${word.meaningENG}</p>
      <p>Turkish: ${word.meaningTR}</p>
      <p>Example 1: ${word.example1}</p>
      <p>Example 2: ${word.example2}</p>`;
    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write('<html><head><title>Print</title></head><body>');
    printWindow.document.write(printContent);
    printWindow.document.write('</body></html>');
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
        <div className='search-bar pb-5 mb-2 col-md-8'>
          <input
            type='text'
            className='form-control text-start fs-6 text fw-light'
            placeholder={`🔍  Search`}
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>

      {filteredWords.map(word => (
        <div className='border-bottom mb-4' key={word.id}>
          <div className='d-flex flex-column'></div>

          <div className='d-flex justify-content-start gap-2 mb-2 text-body-emphasis'>
            <button
              className='btnTop d-flex text-body-emphasis'
              onClick={() => handlePrint(word)}
            >
              <PrintIcon />
            </button>
            <button className='btnTop d-flex text-body-emphasis'>
              <BookIcon />
            </button>
          </div>

          <div className='d-flex me-0 pe-0 textWord1 mb-4 justify-content-start'>
            {word.date}
          </div>

          <div className='container text-center'>
            <div className='row'>
              <div className='col-md-8'>
                <div className='d-flex justify-content-center'>
                  <b className='d-flex mobileWord wordDay justify-content-center'>
                    {word.word}
                  </b>
                </div>
                <button
                  onClick={() => readWordAloud(word)}
                  style={{
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer',
                    marginLeft: '5px',
                  }}
                >
                  <VoiceIcon width='30' height='30' />
                </button>
                <div className='d-flex justify-content-center text-body-emphasis mb-2'>
                  <p className='fst-italic textWord1 mb-3 d-flex justify-content-center'>
                    {word.grammar}
                  </p>
                </div>
              </div>
              <div className='custom-image-container mb-3 col-md-4 col-sm-6'>
                <img
                  src={word.image}
                  className='img-thumbnail custom-image mt-2'
                  alt=''
                />
              </div>
            </div>
          </div>
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

      {visibleWordsCount < wordData.length && searchTerm === '' && (
        <div className='d-grid col-4 mx-auto'>
          <button
            className='loadMore'
            onClick={() => setVisibleWordsCount(prevCount => prevCount + 5)}
          >
            50+ words
          </button>
        </div>
      )}
    </div>
  );
}

export default WordApp;
