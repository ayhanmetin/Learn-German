import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import wordData from '../wordData';
import './wordApp.css';

function WordApp() {
  // State for controlling the visibility count of words
  const [visibleWordsCount, setVisibleWordsCount] = useState(5);
  // State for handling the search term input
  const [searchTerm, setSearchTerm] = useState('');

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
    printWindow.onafterprint = function() {
        printWindow.close(); // Close the print window
        window.scrollTo(0, currentScrollPosition); // Restore the scroll position
    };

    printWindow.print();
};


  // Filtering logic to find words based on the search term or display a limited number
  const filteredWords =
    searchTerm.length > 0
      ? wordData.filter(
          word =>
            word.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
            word.meaningENG.toLowerCase().includes(searchTerm.toLowerCase()) ||
            word.meaningTR.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : wordData.slice(0, visibleWordsCount);

  return (
    <div className='container col-12'>
      <div className='search-bar mb-3'>
        <input
          type='text'
          className='form-control'
          placeholder='Search words...'
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
        <div className='d-grid gap-2 col-6 mx-auto'>
          <button
            className='btn btn-sm btn-primary'
            onClick={() => setVisibleWordsCount(prevCount => prevCount + 5)}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default WordApp;
