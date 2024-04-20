import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import wordData from '../wordData';
import './wordApp.css';
import { BookIcon, PrintIcon, SearchIcon, VoiceIcon } from './IconBox';

function WordApp() {
  const [visibleWordsCount, setVisibleWordsCount] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredWords, setFilteredWords] = useState([]);

  // Effect hook for setting up speech synthesis when voices change
  useEffect(() => {
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = populateVoices;
    }
  }, []);

  const populateVoices = () => {
    let voices = window.speechSynthesis.getVoices();
    return voices.filter(
      voice =>
        voice.gender === 'female' || voice.name.toLowerCase().includes('female')
    );
  };

  // Function to handle the speech synthesis of a word
  const readWordAloud = word => {
    const speech = new SpeechSynthesisUtterance(word.word);
    let voices = populateVoices();
    if (voices.length > 0) {
      speech.voice = voices[0]; // Use the first found female voice
    }
    window.speechSynthesis.speak(speech);
  };

  // Event handler for search input changes
  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const handlePrint = word => {
    const currentScrollPosition = window.scrollY; // Save current scroll position

    const printContent = `
      <h1>${word.word}</h1>
      <p>Grammar: ${word.grammar}</p>
      <p>English: ${word.meaningENG}</p>
      <p>Turkish: ${word.meaningTR}</p>
      <p>Example 1: ${word.example1}</p>
      <p>Example 2: ${word.example2}</p>
    `;

    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write('<html><head><title>Print</title></head><body>');
    printWindow.document.write(printContent);
    printWindow.document.write('</body></html>');
    printWindow.document.close();

    // Wait for the print dialog to close

    printWindow.onafterprint = function () {
      printWindow.close();
      window.scrollTo(0, currentScrollPosition); // Restore the scroll position
    };

    printWindow.print();
  };

  useEffect(() => {
    const newFilteredWords =
      searchTerm.trim().length > 0
        ? wordData.filter(
            word =>
              word.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
              word.meaningENG
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
              word.meaningTR.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : wordData.slice(0, visibleWordsCount);
    setFilteredWords(newFilteredWords);
  }, [searchTerm, visibleWordsCount]);

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
          <div className='d-flex justify-content-start gap-2 mb-3 text-body-emphasis'>
            <button
              className='btnTop text-body-emphasis'
              onClick={() => handlePrint(word)}
            >
              <PrintIcon />
            </button>
            <button className='btnTop text-body-emphasis'>
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
                  <div className='col-4'></div>
                </div>
                <b className='d-flex mobileWord wordDay justify-content-center'>
                  {word.word}
                </b>
                <div className='d-flex justify-content-center text-body-emphasis mb-2'>
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
                </div>
                <p className='fst-italic textWord1 mb-3 d-flex justify-content-center'>
                  {word.grammar}
                </p>
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

      {visibleWordsCount < wordData.length && !searchTerm && (
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
