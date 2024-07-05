import React from 'react';
import { Link } from 'react-router-dom';
import { InstaIcon, XIcon } from './IconBox';

export default function Footer2() {
  const xUrl = '';

  return (
    <>
      <div className='mt-5 pt-5'>
        <footer className='container d-flex flex-column flex-sm-row justify-content-between align-items-center pt-1 mt-0'>
          <ul className='list-unstyled mb-0 w-100 text-center d-flex flex-column'>
            <li>
              <p className='mb-1 mt-3'>© 2024 Ayhan Metin</p>
              <div className='d-flex justify-content-center align-items-center'>
                <p className='mb-5 me-3 mt-1 text-body-secondary'>
                  <a
                    href={xUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{
                      border: 'none',
                      background: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <XIcon />
                  </a>
                </p>
              </div>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}
