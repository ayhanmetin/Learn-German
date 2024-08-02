import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import modalverben1 from '../image2/modalverben1.png';
import modalverben2 from '../image2/modalverben1.png';


const Images = [
  modalverben1, modalverben2
  // Add more images if needed
];

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * Images.length);
  return Images[randomIndex];
};

const ImageComponent = () => {
  const randomImage = getRandomImage();

  return (
    <>
      <p className='card-text text-center fs-6 text-body-emphasis mt-3'>
        📚 Deutsche Grammatik
      </p>
      <div className='container mb-0 pb-0 d-flex justify-content-center align-items-center mt-1'>
        <div className='card'>
          <img src={randomImage} className='card-img-top' alt='Random Image' />
        </div>
      </div>
    </>
  );
};

export default ImageComponent;
