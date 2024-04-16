import React, { useState } from 'react';

const wordData = [
  // Sample data
  {
    date: '2023-04-01',
    word: 'acumen',
    example: 'She has considerable business acumen.',
    meaningENG: 'the ability to make good judgments and quick decisions',
    meaningTR: 'iyi kararlar ve hızlı kararlar verme yeteneği',
    tag: 'business',
    gameCode: '1',
    mode: 'easy',
  },
  {
    date: '2023-04-02',
    word: 'arduous',
    example: 'An arduous journey across the mountains',
    meaningENG: 'involving or requiring strenuous effort',
    meaningTR: 'ağır çaba gerektiren',
    tag: 'travel',
    gameCode: '2',
    mode: 'hard',
  },
  // Add more words as needed
];

function WordApp() {
  const [mode, setMode] = useState('easy'); // Default mode

  const filteredWords = wordData.filter(word => word.mode === mode);

  return (
    <div>
      <div>
        {filteredWords.map((word, index) => (
          <div key={index}>
            <p className='text-center'>
              <b>Date:</b> {word.date}
            </p>
            <h2 className='text-center'>Word of the Day : {word.word}</h2>
            <p>
              <b>Example 1:</b> {word.example}
            </p>
            <p>
              <b>Example 2:</b> {word.example}
            </p>
            <p>
              <b>English:</b> {word.meaningENG}
            </p>
            <p>
              <b>Turkish:</b> {word.meaningTR}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WordApp;
