import React from 'react';
import './ImageComponent.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import modalverben3 from '../image2/modalverben3.png';
import modalverben6 from '../image2/modalverben6.png';
import prepo1 from '../image2/prepo1.png';
import prepo2 from '../image2/prepo2.png';
import perfekt2 from '../image2/perfekt2.png';
import perfekt3 from '../image2/perfekt3.png';
import akk1 from '../image2/akk1.png';


const Images = [modalverben3, modalverben6, prepo1, prepo2, perfekt2, perfekt3, akk1];

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * Images.length);
  return Images[randomIndex];
};

const ImageComponent = () => {
  const randomImage = getRandomImage();

  return (
    <>
      <div className='col-12'>
        <Link className='grammatik' to='/grammar'>
          <p className='card-text mb-2 grammatik text-center text-body-emphasis mt-3'>
            📚 Deutsche Grammatik
          </p>
        </Link>
        <div className='container mb-0 pb-0 d-flex justify-content-center align-items-center mt-1'>
          <div className='card'>
            <a href={randomImage} target='_blank' rel='noopener noreferrer'>
              <img
                src={randomImage}
                className='card-img-top'
                alt='Random Image'
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageComponent;
