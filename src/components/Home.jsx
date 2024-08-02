import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import wordData from '../wordData';
import Footer2 from './Footer2';
import './wordApp.css';
import './home.css';
import {
  BookIcon,
  BookmarkedIcon,
  CopyIcon,
  PrintIcon,
  VoiceIcon,
} from './IconBox';
import { Link } from 'react-router-dom';
import WordDay from './WordDay';
import ImageComponent from './ImageComponent';

function WordApp() {
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

  useEffect(() => {
    if (!searchTerm) {
      setFilteredWords([]);
    }
  }, [searchTerm]);

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
      setFilteredWords([]);
    }
  };

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

  return (
    <>
      <div className='d-flex col-8 flex-column'>

        <div className=''>
          <div className='d-flex justify-content-center align-items-center mb-3'>
            <WordDay />
          </div>
          <div className='d-flex mb-4 justify-content-center align-items-center'>
            <div className='search-bar pb-2 col-8 mb-1 p-1'>
              <input
                type='text'
                className='form-control text-start fs-6 text fw-light'
                placeholder='Search'
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
          </div>

          {filteredWords.map((word, index) => (
            <div className=' border-dark-subtle col-10 p-4 mb-3' key={index}>

              <div className='d-flex justify-content-start align-items-center'>
                <div className=''>
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
                  <div className='d-flex  justify-content-start'>
                    {' '}
                    <div className='word-container fs-4 mainBody'>
                      {word.grammar && (
                        <p className='fst-italic grammar fs-5 ms-0 ps-0 mb-4 mt-0 pt-0 mb-4'>
                          {word.grammar}
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

                      <div className='d-flex align-items-center gap-3'>
                        {word.PartizipII && (
                          <p className='textWord tense'>
                            <span className='grammar'>Partizip II:</span>{' '}
                            {word.PartizipII}
                          </p>
                        )}
                        {word.Präteritum && (
                          <p className='textWord me-3 tense'>
                            <span className='grammar'>Präteritum:</span>{' '}
                            {word.Präteritum}
                          </p>
                        )}
                      </div>

                      {word.plural && (
                        <p className='textWord  me-3 tense'>
                          <span className='grammar'>&nbsp;plural</span> &nbsp;
                          {word.plural}
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
                          <p className='tip'>&nbsp;Tips</p>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-0 pt-0 d-flex justify-content-center align-items-center'>
          <div className='col-8 text-center'>
            <div className='row custom-gutter custom-row-gap'>
              <div className='col-6 p-1'>
                <Link to='/basics' className='border homeCss bg-light d-block'>
                  B1 Words
                </Link>
              </div>
              <div className='col-6 p-1'>
                <Link
                  to='/advanced'
                  className='border homeCss bg-light d-block'
                >
                  C1 Words
                </Link>
              </div>
              <div className='col-6 p-1'>
                <Link to='/b1exam' className='border homeCss bg-light d-block'>
                  Prüfung
                </Link>
              </div>
              <div className='col-6 p-1'>
                <Link
                  to='/sprichwörter'
                  className='border homeCss bg-light d-block'
                >
                  Mehr...
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className='startSpace mt-5 border'>
          {' '}
          <ImageComponent />{' '}
        </div>

        <div className='col-12'>
          {' '}
          <Footer2 />
        </div>
      </div>
    </>
  );
}

export default WordApp;
