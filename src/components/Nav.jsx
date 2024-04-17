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
        <div className='mt-3 d-flex gap-5 mb-5 justify-content-center'>
          <ThemeIcon />
        </div>
      </div>

      <div className='container'>
        <ul className='navbar-nav me-auto mb-2'>
          <div className='d-flex gap-5 justify-content-center'>
            <li className='nav-item'>
              <a
                className='link-warning text-start link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'
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
                mix
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'
                href='#'
              >
                pro
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'
                href='#'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  class='bi bi-bookmarks-fill'
                  viewBox='0 0 16 16'
                >
                  <path d='M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5z' />
                  <path d='M4.268 1A2 2 0 0 1 6 0h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L13 13.768V2a1 1 0 0 0-1-1z' />
                </svg>
              </a>
            </li>

            {/* <li className='nav-item'>
              <a
                className='link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'
                href='#'
              >
                about
              </a>
            </li> */}
          </div>
        </ul>
      </div>
      <div className='border-bottom'></div>
    </>
  );
}
