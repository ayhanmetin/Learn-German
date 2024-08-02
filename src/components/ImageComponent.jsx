import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import grammerData from '../grammerData'; // Importing the grammar data

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const GrammarComponent = () => {
  // Shuffle the grammar data array
  const shuffledData = shuffleArray(grammerData);

  // Get the first item from the shuffled array
  const randomItem = shuffledData[0];

  if (!randomItem) return null; // Ensure there's data to display

  return (
    <div className='margin d-flex mobileMain justify-content-start align-items-center'>
      <div className='col-10'>
        <div className='d-flex justify-content-center align-items-center mb-0'>
          <b className='mobileWord mb-3 wordMain wordDay'>{`${randomItem.level} - ${randomItem.topic}`}</b>
        </div>
        <div className='d-flex justify-content-start'>
          <div className='word-container fs-4 mainBody mt-0 pt-0'>
            {randomItem.multipleChoice && (
              <p className='fs-6 mt-2'>
                <span className='grammar'>Multiple Choice:</span> {randomItem.multipleChoice}
              </p>
            )}

            {randomItem.example1 && (
              <p className='textWord'>
                <strong>‣ Example 1:</strong> {randomItem.example1}
              </p>
            )}
            {randomItem.example2 && (
              <p className='textWord'>
                <strong>‣ Example 2:</strong> {randomItem.example2}
              </p>
            )}
            {randomItem.example3 && (
              <p className='textWord'>
                <strong>‣ Example 3:</strong> {randomItem.example3}
              </p>
            )}
            {randomItem.example4 && (
              <p className='textWord'>
                <strong>‣ Example 4:</strong> {randomItem.example4}
              </p>
            )}
            {randomItem.example5 && (
              <p className='textWord'>
                <strong>‣ Example 5:</strong> {randomItem.example5}
              </p>
            )}

            {randomItem.question1 && (
              <p className='textWord'>
                <strong>⇢ Question 1:</strong> {randomItem.question1}
              </p>
            )}
            {randomItem.question2 && (
              <p className='textWord'>
                <strong>⇢ Question 2:</strong> {randomItem.question2}
              </p>
            )}
            {randomItem.question3 && (
              <p className='textWord'>
                <strong>⇢ Question 3:</strong> {randomItem.question3}
              </p>
            )}
            {randomItem.question4 && (
              <p className='textWord'>
                <strong>⇢ Question 4:</strong> {randomItem.question4}
              </p>
            )}
            {randomItem.question5 && (
              <p className='textWord'>
                <strong>⇢ Question 5:</strong> {randomItem.question5}
              </p>
            )}
            {randomItem.question6 && (
              <p className='textWord'>
                <strong>⇢ Question 6:</strong> {randomItem.question6}
              </p>
            )}

            {randomItem.tip1 && (
              <p className='textWord mt-3 fs-6'>
                <strong>&nbsp;⇢ Tip 1:</strong> {randomItem.tip1}
              </p>
            )}
            {randomItem.tip2 && (
              <p className='textWord mt-3 fs-6'>
                <strong>&nbsp;⇢ Tip 2:</strong> {randomItem.tip2}
              </p>
            )}
            {randomItem.tip3 && (
              <p className='textWord mt-3 fs-6'>
                <strong>&nbsp;⇢ Tip 3:</strong> {randomItem.tip3}
              </p>
            )}
            {randomItem.grammerTable && (
              <div className='textWord mt-3'>
                <p className='tip'>&nbsp;Grammar Table</p>
                <div dangerouslySetInnerHTML={{ __html: randomItem.grammerTable }} />
              </div>
            )}
            {randomItem.tag && (
              <p className='textWord mt-3'>
                <strong>&nbsp;Tag:</strong> {randomItem.tag}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrammarComponent;
