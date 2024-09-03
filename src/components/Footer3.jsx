import React from 'react';
import { Link } from 'react-router-dom';
import { InstaIcon, XIcon } from './IconBox';
import './footer2.css';
import yourImage from '../image/ayhan.png';

export default function Footer3() {
  return (
    <>
      <div className='my-custom-margin mt-5 pt-0'>
        <footer className='container d-flex flex-column flex-sm-row justify-content-between align-items-center pt-1 mt-0'>
          <ul className='list-unstyled mb-0 w-100 text-center d-flex flex-column'>
            <li>
              <p className='mb-1 mt-5'>© 2024 Ayhan Metin</p>
              <div className='d-flex justify-content-center align-items-center'>
                <img
                  src={yourImage}
                  className='small-rounded-image mx-auto d-block mt-3'
                  alt='Ayhan Metin'
                />
              </div>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}
