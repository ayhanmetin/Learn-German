import React from 'react';
import { Link } from 'react-router-dom';
import { InstaIcon } from './IconBox';

export default function Footer2() {
  const instagramUrl = 'https://www.instagram.com/ayhanmetinde';

  return (
    <footer className='container d-flex flex-column flex-sm-row justify-content-between align-items-center pt-5 mt-5'>
      <ul className='list-unstyled mb-0 w-100 text-center d-flex flex-column justify-content-end'>
        <li>
          <Link
            to='/about#almancaSertifikalar'
            className='text-decoration-none text-body-secondary footerText'
          >
            📚 Informationen über Deutschlernen
          </Link>
        </li>
        <li>
          <p className='mb-1 mt-3'>© 2024 Ayhan Metin</p>
          <p className='mb-5 mt-1'>
            <a
              href={instagramUrl}
              target='_blank'
              rel='noopener noreferrer'
              style={{
                border: 'none',
                color: '#179B95',
                background: 'none',
                cursor: 'pointer',
              }}
            >
              <InstaIcon />
            </a>
          </p>
        </li>
      </ul>
    </footer>
  );
}
