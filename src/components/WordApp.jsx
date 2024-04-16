import React from 'react';
import wordData from '../wordData';  // Adjust the path as necessary based on your project structure

function WordApp() {
  return (
    <div>
      {wordData.map((word) => (
        <div key={word.id}>
          <p className='text-center'>
            <b>Date:</b> {word.date}
          </p>
          <h2 className='text-center'>Word of the Day: {word.word}</h2>
          <div className=''>
            <img
              src={word.image}
              alt={`Image representing the word ${word.word}`}
              className='rounded-circle mt-2 shadow-lg'
              style={{
                width: '100px',
                height: '100px',
                objectFit: 'cover',
              }}
            />
          </div>
          <p>
            <b>Example:</b> {word.example}
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
  );
}

export default WordApp;
