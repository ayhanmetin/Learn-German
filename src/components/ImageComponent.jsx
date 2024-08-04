import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import modalverben1 from '../image2/modalverben1.png';
import modalverben3 from '../image2/modalverben3.png';
import modalverben4 from '../image2/modalverben4.png';
import modalverben6 from '../image2/modalverben6.png';

const Images = [
  modalverben1,
  modalverben3,
  modalverben4,
  modalverben6,
];

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * Images.length);
  return Images[randomIndex];
};

const ImageComponent = () => {
  const randomImage = getRandomImage();

  return (
    <>
      <div className='col-12'>
        <p className='card-text text-center fs-6 text-body-emphasis mt-3'>
          📚 Deutsche Grammatik
        </p>
        <div className='container mb-0 pb-0 d-flex justify-content-center align-items-center mt-1'>
          <div className='card'>
            <a href={randomImage} target="_blank" rel="noopener noreferrer">
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
