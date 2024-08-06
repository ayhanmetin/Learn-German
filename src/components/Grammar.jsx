import React from 'react';
import { Link } from 'react-router-dom';
import './grammar.css';

// Import your images

import modalverben3 from '../image2/modalverben3.png';
import modalverben6 from '../image2/modalverben6.png';
import prepo1 from '../image2/prepo1.png';
import prepo2 from '../image2/prepo2.png';
import perfekt2 from '../image2/perfekt2.png';
import perfekt3 from '../image2/perfekt3.png';
import akk1 from '../image2/akk1.png';


const Images = [modalverben3, modalverben6, prepo1, prepo2, perfekt2, perfekt3, akk1];

const Grammar = () => {
  return (
    <div className='col-12 text-center mt-3'>
      <div>
        <p className='card-text mb-4 fs-2 mb-5 border-bottom pb-3 text-center text-body-emphasis mt-3'>
          📚 Deutsche Grammatik
        </p>
      </div>
      <div className='row row-cols-2'>
        {Images.map((image, index) => (
          <div className='col mb-4' key={index}>
            <div className='card h-100 grammatik1'>
              <a href={image} target='_blank' rel='noopener noreferrer'>
                <img
                  src={image}
                  className='card-img-top grammatik1'
                  alt={`Image ${index + 1}`}
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grammar;
