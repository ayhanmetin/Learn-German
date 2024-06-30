import React from 'react';
import { Link } from 'react-router-dom';
import { InstaIcon, MediumIcon, XIcon } from './IconBox';
import GoTop from './GoTop';

export default function Footer2() {
  const instagramUrl = 'https://www.instagram.com/ayhanmetinde';

  return (
    <>
      <div className='d-flex justify-content-center align-items-center mb-0 pb-0'>
        <GoTop />
      </div>
      <footer className='container d-flex flex-column flex-sm-row justify-content-between align-items-center pt-1 mt-0'>
        <ul className='list-unstyled mb-0 w-100 text-center d-flex flex-column'>
          <li>
            <Link
              to='/about'
              className='text-decoration-none text-body-secondary footerText'
            >
              📚 Informationen über Deutschlernen
            </Link>
          </li>
          <li>
            <p className='mb-1 mt-3'>© 2024 Ayhan Metin</p>
            <div className='d-flex justify-content-center align-items-center'>
              <p className='mb-5 mt-1 text-dark'>
                <a
                  href={instagramUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{
                    border: 'none',
                    color: '#e6a938',
                    background: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <XIcon />
                </a>
              </p>
              <p className='mb-5 mt-1'>
                <a
                  href={instagramUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{
                    border: 'none',
                    color: '#e6a938',
                    background: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <InstaIcon />
                </a>
              </p>

              <p className='mb-5 mt-1'>
                <a
                  href={instagramUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{
                    border: 'none',
                    color: '#e6a938',
                    background: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <MediumIcon />
                </a>
              </p>
            </div>
          </li>
        </ul>
      </footer>
    </>
  );
}
