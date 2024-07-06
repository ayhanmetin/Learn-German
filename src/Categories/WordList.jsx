import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import wordData from '../wordData';
import './wordList.css';

const WordList = () => {
  const navigate = useNavigate();
  const [selectedGrammar, setSelectedGrammar] = useState('total');
  const [filteredWords, setFilteredWords] = useState([]);

  const grammarCounts = {
    total: wordData.length,
    adverb: wordData.filter(word => word.grammar === 'adverb').length,
    verb: wordData.filter(word => word.grammar === 'verb').length,
    others: wordData.filter(
      word => word.grammar !== 'adverb' && word.grammar !== 'verb'
    ).length,
  };

  useEffect(() => {
    if (selectedGrammar === 'total') {
      setFilteredWords(wordData);
    } else {
      setFilteredWords(
        wordData.filter(word => word.grammar === selectedGrammar)
      );
    }
  }, [selectedGrammar]);

  const handleWordClick = word => {
    navigate(`/word/${encodeURIComponent(word)}`);
  };

  const handleCategoryClick = category => {
    setSelectedGrammar(category);
  };

  return (
    <div className='col-11 mt-0 pt-0 mb-5'>
      <div>
        {/* <span
          className='wordCountx fs-5'
          style={{ cursor: 'pointer' }}
          onClick={() => handleCategoryClick('adverb')}
        >
          Adverbs: {grammarCounts.adverb}
        </span>
        
        <span
          className='wordCountx fs-5'
          style={{ cursor: 'pointer' }}
          onClick={() => handleCategoryClick('verb')}
        >
          Verbs: {grammarCounts.verb}
        </span> */}
        {/* <span
          className='wordCountx fs-5'
          style={{ cursor: 'pointer' }}
          onClick={() => handleCategoryClick('others')}
        >
          Others: {grammarCounts.others}
        </span> */}
      </div>
      <div className='word-list mt-4'>
        {filteredWords.map((word, index) => (
          <React.Fragment key={index}>
            <span
              className='wordList'
              style={{ cursor: 'pointer' }}
              onClick={() => handleWordClick(word.word)}
            >
              {word.article ? `${word.article} ` : ''}
              {word.word}
            </span>
            {index < filteredWords.length - 1 && <span>, </span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default WordList;
