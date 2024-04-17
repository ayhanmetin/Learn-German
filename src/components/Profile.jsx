import React from 'react';
import cv from '../image/cv.jpeg';

export default function () {
  return (
    <>
      <header
        className='d-flex justify-content-center align-items-center'
        style={{ height: '10px' }}
      >
        <div className='d-flex align-items-center'>
          <div className='me-2'>
            <img
              src={cv}
              alt='Ayhan Metin'
              className='rounded-circle mt-2 shadow-lg'
              style={{
                width: '30px',
                height: '30px',
                objectFit: 'cover',
                transition: 'transform 0.3s ease',
              }}
              onMouseOver={e =>
                (e.currentTarget.style.transform = 'scale(1.08)')
              }
              onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
            />
          </div>
        </div>
      </header>
    </>
  );
}
