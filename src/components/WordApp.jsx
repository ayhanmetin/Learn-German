import React, { useState } from 'react';

const wordData = [
  // Sample data
  { date: "2023-04-01", word: "acumen", example: "She has considerable business acumen.", meaningENG: "the ability to make good judgments and quick decisions", meaningTR: "iyi kararlar ve hızlı kararlar verme yeteneği", tag: "business", gameCode: "1", mode: "easy" },
  { date: "2023-04-02", word: "arduous", example: "An arduous journey across the mountains", meaningENG: "involving or requiring strenuous effort", meaningTR: "ağır çaba gerektiren", tag: "travel", gameCode: "2", mode: "hard" },
  // Add more words as needed
];

function WordApp() {
  const [mode, setMode] = useState('easy');  // Default mode

  const filteredWords = wordData.filter(word => word.mode === mode);

  return (
    <div>
      <h1>Word Learning App</h1>
      <button onClick={() => setMode('easy')}>Easy Mode</button>
      <button onClick={() => setMode('hard')}>Hard Mode</button>
      <div>
        {filteredWords.map((word, index) => (
          <div key={index}>
            <h2>{word.word} - {word.mode}</h2>
            <p><b>Meaning in English:</b> {word.meaningENG}</p>
            <p><b>Meaning in Turkish:</b> {word.meaningTR}</p>
            <p><b>Example:</b> {word.example}</p>
            <p><b>Date:</b> {word.date}</p>
            <p><b>Tag:</b> {word.tag}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WordApp;
