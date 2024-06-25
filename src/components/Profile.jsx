import React from 'react';
import flag from '../image/Flag_of_Germany.png';

export default function () {
  return (
    <>
      <div className='d-flex align-items-center'
        style={{
          transition: 'transform 0.3s ease', // Apply transition to the container
        }}
        onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.08)')}
        onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <img
          src={flag}
          alt='Flag of Germany'
          className='rounded-circle shadow-lg me-2'
          style={{
            width: '24px',
            height: '24px',
            objectFit: 'cover'
          }}
        />
        <span className='text-white fw-medium'>info</span>
      </div>
    </>
  );
}
