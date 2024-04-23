import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import wordData from '../wordData';
import '../components/wordApp.css';
import { BookIcon, PrintIcon, VoiceIcon } from '../components/IconBox';
import { SpeedInsights } from '@vercel/speed-insights/react';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function Mix() {
  const [filteredWords, setFilteredWords] = useState(() => shuffleArray([...wordData]));
  const [voices, setVoices] = useState([]);

  useEffect(() => {
    const loadVoices = () => {
      setVoices(window.speechSynthesis.getVoices());
    };

    if (window.speechSynthesis) {
      loadVoices();
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }

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
      {filteredWords.map(word => (
        <div
          className='border-bottom border-dark-subtle px-4 mb-3'
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
              <button className='btnTop btnTop1 ms-0 text-body-emphasis'>
                <BookIcon />
              </button>
            </div>
          </div>
          <div>
            <SpeedInsights />
            <div className='row'>
              <div className='col-md-8'>
              <div className='d-flex justify-content-start align-items-center'>
  <b className='d-flex mobileWord wordDay align-items-center'>
    {word.word}
  </b>
  <button
    className='ms-2 position-relative'
    onClick={() => readWordAloud(word)}
    style={{
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      top: '0'  
    }}
  >
    <VoiceIcon width='22' height='22' />
  </button>
</div>

                <div className='d-flex justify-content-start text-body-emphasis mt-1 mb-1'>
                  <p className='fst-italic textWord1 mb-1 d-flex justify-content-center'>
                    {word.grammar}
                  </p>
                </div>
              </div>
              <div className='custom-image-container mt-0 mb-2 col-md-4 col-sm-6'>
                <img
                  src={word.image}
                  className='img-thumbnail custom-image mt-2'
                  alt={`Image depicting the word ${word.word}`}
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
    </div>
  );
}

export default Mix;
