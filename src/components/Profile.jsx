import React from 'react';
import flag from '../image/Flag_of_Germany.png';

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
              src={flag}
              alt='Flag_of_Germany'
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
