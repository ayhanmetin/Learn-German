import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css';
import ThemeIcon from './ThemeIcon';

export default function Nav() {
  return (
    <>
      <div style={{ borderTop: '5px solid #FEC214' }}>
        {' '}
        <h1 className='text-center'></h1>
      </div>

      <div className='d-flex gap-5 justify-content-center'>
        <div className='mt-3 d-flex gap-5 mb-4 justify-content-center'>
          <ThemeIcon />
        </div>
      </div>

      <div className='container'>
        <ul className='navbar-nav me-auto mb-2'>
          <div className='d-flex gap-5 justify-content-center'>
            <li className='nav-item'>
              <a
                className='link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'
                href='#'
              >
                home
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'
                href='#'
              >
                fav
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'
                href='#'
              >
                mix
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'
                href='#'
              >
                hard
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'
                href='#'
              >
                about
              </a>
            </li>
          </div>
        </ul>
      </div>
      <div className='border-bottom'></div>
    </>
  );
}
