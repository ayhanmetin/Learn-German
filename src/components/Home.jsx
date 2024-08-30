import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import wordData from '../wordData';
import './home.css';
import { VoiceIcon } from './IconBox';
import { Link } from 'react-router-dom';
import WordCountDisplay from './WordCountDisplay';
import { NavLink } from 'react-router-dom';
import './nav.css';
import WordList from '../Categories/WordList';
import Nav from './Nav';

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
    // Reset filtered words when search term is cleared
    if (!searchTerm) {
      setFilteredWords([]);
    }
  }, [searchTerm]);

  const handleSearch = event => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    // Filtering logic
    if (value.trim()) {
      const newFilteredWords = wordData.filter(word =>
        word.word.toLowerCase().includes(value)
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
      <div className='d-flex col-12 flex-column'>
        <div className='container d-flex justify-content-center align-items-center'>
          <div className='search-bar pb-2 mb-1 col-12'>
            <input
              type='text'
              className='form-control text-center fs-6 text fw-light'
              placeholder={`Suche deutsches Wort`}
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>

        {filteredWords.length > 0 ? (
          filteredWords.map((word, index) => (
            <div
              className='border-dark-subtle homeBorder mb-2'
              key={index}
            >
              <div className='d-flex flex-column frameMAin'>
                <div className='d-flex justify-content-between align-items-center mb-3'>
                  <b className='fs-1'>{`${word.article} ${word.word}`}</b>
                </div>
                <div className='margin d-flex border-bottom mobileMain justify-content-start align-items-center'>
                  <div className='col-12'>
                    <div className='word-container fs-4 mainBody mt-0 pt-0'>
                      <div className='d-flex grammarMain text-body-secondary flex-row mb-0'>
                        {word.grammar && (
                          <div className='pt-2 ps-0 pe-2'>
                            <p className='fst-italic grammarMain text-body-secondary fs-6 ms-0 ps-0 mb-2 mt-0 pt-0'>
                              {word.grammar}
                              <span className='grammarMain text-body-secondary'></span>
                            </p>
                          </div>
                        )}
                        {word.PartizipII && (
                          <div className='pt-2 pe-0'>
                            <p className='mt-0 ms-0 pt-0 m-0 p-0 flex-column ms-0 me-2 fs-6 grammarMain text-body-secondary'>
                              <span className='grammarMain text-body-secondary'>
                                {' '}
                                &nbsp;&nbsp; ☞ &nbsp;&nbsp;
                              </span>{' '}
                              {word.PartizipII} &nbsp;
                            </p>
                          </div>
                        )}
                        {word.Präteritum && (
                          <div className='pt-2 pe-0'>
                            <p className='ms-0 mt-0 pt-0 fs-6 flex-column grammarMain text-body-secondary'>
                              <span className='grammarMain text-body-secondary '>
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

                    <div className='d-flex justify-content-start'>
                      {' '}
                      <div className='word-container fs-4 mainBody mt-0 pt-0'>
                        <p className='textWord meaning fst-italic mt-2'>
                          <strong>&nbsp;-</strong> &nbsp;{word.meaningENG}
                        </p>

                        {word.meaningTR && (
                          <p className='textWord fst-italic'>
                            <strong>&nbsp;-</strong> &nbsp;{word.meaningTR}
                          </p>
                        )}
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

                        {word.tip1 && (
                          <p className='textWord mt-3 fs-6'>
                            <p className='tip'>&nbsp;Tips</p>
                            <strong>&nbsp;⇢</strong> {word.tip1}
                          </p>
                        )}
                        {word.tip2 && (
                          <p className='textWord mt-3 fs-6'>
                            <strong>&nbsp;⇢</strong> {word.tip2}
                          </p>
                        )}
                        {word.tip3 && (
                          <p className='textWord mt-3 fs-6'>
                            <strong>&nbsp;⇢</strong> {word.tip3}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className='text-center'></p>
        )}

        <div className='mt-2 pt-5'>
          <WordList />
        </div>
      </div>
    </>
  );
}

export default WordApp;
