import React from 'react';
import wordData from '../wordData'; 

function WordApp() {
  return (
    <div>
      {wordData.map((word) => (
        <div key={word.id}>
          <p className='text-center'>
            <b>Word of the Day:</b> {word.date}
          </p>
          <h2 className='text-center'>{word.word}</h2>
          <p>
            <b>Exp:</b> {word.example1}
          </p>
          <p>
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

export default WordApp;
