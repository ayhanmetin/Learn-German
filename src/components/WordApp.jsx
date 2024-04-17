import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import wordData from '../wordData'; 

function WordApp() {
  return (
    <div>
      {wordData.map((word) => (
        <div key={word.id}>
          <p className=''>
            <b>Word of the Day:</b> {word.date} Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, praesentium!
          </p>
          <h2 className='text-center'>{word.word}</h2>
          <p>
            <b>Exp 1:</b> {word.example1}
          </p>
          <p>
            <b>Exp 2:</b> {word.example1}
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
