import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import wordData from '../wordData';
import './wordApp.css';
import WordList from '../Categories/WordList';

function WordApp() {
  const [visibleWordsCount, setVisibleWordsCount] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredWords, setFilteredWords] = useState([]);

  useEffect(() => {
    setFilteredWords(wordData.slice(0, visibleWordsCount));
  }, [visibleWordsCount]);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    if (value.trim()) {
      const newFilteredWords = wordData.filter(
        word =>
          word.word.toLowerCase().includes(value) ||
          word.meaningENG?.toLowerCase().includes(value) || // added optional chaining
          word.meaningTR?.toLowerCase().includes(value) ||  // added optional chaining
          word.Präteritum?.toLowerCase().includes(value) || // added optional chaining
          word.PartizipII?.toLowerCase().includes(value)    // added optional chaining
      );
      setFilteredWords(newFilteredWords);
    } else {
      setFilteredWords(wordData.slice(0, visibleWordsCount));
    }
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
            className='mainFrame pMain mt-3 mb-3 border-bottom p-2'
            key={index}
          >
            <div className='margin d-flex text-start frameMAin mobileMain mobileBelow flex-column'>
              <div className='col-12 text-start word-containerMain2'>
                <div className='text-start mb-0'>
                  <b className='mobileWord mb-3 wordMain wordDay'>{`${word.article || ''} ${word.word}`}</b>
                </div>
                {word.grammar && (
                  <div className='pt-0 ps-0 pe-2'>
                    <p className='verbText  fs-6 ms-0 ps-0 mb-0 mt-2 pt-0'>
                      ✏︎ &nbsp;&nbsp; {word.grammar}
                    </p>
                  </div>
                )}

                <div className='word-containerMain2'>
                  <div className='word-container fs-4 mainBody mt-0 pt-0'>
                    <div className='d-flex  verbText  flex-row mb-0'>
                      {word.PartizipII && (
                        <div className='pt-2 pe-0'>
                          <p className='mt-0 ms-0 verbText pt-0 m-0 p-0 flex-column ms-0 me-2 fs-6 '>
                            {word.PartizipII} &nbsp;
                          </p>
                        </div>
                      )}
                      {word.Präteritum && (
                        <div className='pt-2 pe-0'>
                          <p className='ms-0 mt-0 verbText pt-0 fs-6 flex-column '>
                            /&nbsp;&nbsp; {word.Präteritum}
                          </p>
                        </div>
                      )}
                      {word.plural && (
                        <div className='pt-2 pe-0'>
                          <p className='ms-0 mt-0 pt-0 fs-6 flex-column '>
                            {word.plural}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className='word-container fs-4 mainBody mt-0 pt-0'>
                    <p className='textWord meaning fst-italic mt-3 mb-3'>
                      <strong>&nbsp;-</strong> &nbsp;{word.meaningENG}
                    </p>

                    {word.meaningTR && (
                      <p className='textWord fst-italic'>
                        <strong>&nbsp;-</strong> &nbsp;{word.meaningTR}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Example sentences below the word */}
              <div className='exampleSentence'>
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
              </div>
            </div>
          </div>
        ))}

        {visibleWordsCount < wordData.length && searchTerm === '' && (
          <div className='d-grid col-4 mx-auto'>
            <button
              className='loadMore text-body-emphasis'
              onClick={() => setVisibleWordsCount(prevCount => prevCount + 50)}
            >
              +50 weitere
            </button>
          </div>
        )}
      </div>

      <div className=''>
        <WordList />
      </div>
    </>
  );
}

export default WordApp;
