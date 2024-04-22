import React from 'react';
import flag from '../image/Flag_of_Germany.png';

export default function () {
  return (
    <>
      <div
        className='d-flex align-items-center'
        style={{ margin: 0, padding: 0 }}
      >
        <div className='me-2' style={{ margin: 0, padding: 0 }}>
          <img
            src={flag}
            alt='Flag of Germany'
            className='rounded-circle shadow-lg'
            style={{
              width: '25px',
              height: '25px',
              objectFit: 'cover',
              transition: 'transform 0.3s ease',
              position: 'relative',
              top: '-1.8px',
              margin: 0,
              padding: 0,
            }}
            onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.08)')}
            onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
          />
        </div>
      </div>
    </>
  );
}
