import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import wordData from '../wordData';
import './wordApp.css';
import { VoiceIcon } from './IconBox';

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

  // Function to populate voices, filtering for female voices or voices including 'female' in their name
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
      <div className='search-bar mb-5'>
        <input
          type='text'
          className='form-control text-center fs-6 text fw-light'
          placeholder={`🔍 Explore words in German, currently: ${visibleWordsCount} words available`}
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      {filteredWords.map(word => (
        <div className='border-bottom mb-4' key={word.id}>
          <div>
            <div className='d-flex textWord1 mb-3 justify-content-center'>
              Word of the Day: {word.date}
            </div>
            <div className='d-flex justify-content-center'>
              <div
                className='col-4'
                style={{ borderBottom: '1px solid #336079' }}
              ></div>
            </div>
            <b className='d-flex mobileWord wordDay justify-content-center'>
              {word.word}
            </b>
            <div className='d-flex justify-content-center mb-2'>
              <span
                onClick={() => readWordAloud(word)}
                style={{ cursor: 'pointer', marginLeft: '5px' }}
              >
                <VoiceIcon width='30' height='30' />
              </span>
            </div>
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
          <button
            onClick={() => handlePrint(word)}
            style={{ marginLeft: '10px' }}
          >
            Print
          </button>
        </div>
      ))}

      {visibleWordsCount < wordData.length && !searchTerm && (
        <div className='d-grid col-8 mx-auto'>
          <button
            className='loadMore'
            onClick={() => setVisibleWordsCount(prevCount => prevCount + 5)}
          >Show 50 more words</button>
        </div>
      )}
    </div>
  );
}

export default WordApp;
