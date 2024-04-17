import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css';
import ThemeIcon from './ThemeIcon';
import Profile from './Profile';
import SubscribeForm from './SubscribeForm';

export default function Nav() {
  return (
    <>
      <div className='' style={{ borderTop: '7px solid #FEC214' }}>
        {' '}
        <div className='gap-5 mt-4 mb-4 m-3 d-flex justify-content-between'>
          <Profile />
          <SubscribeForm />
          <ThemeIcon />
        </div>
      </div>

      <div className='container'>
        <ul className='navbar-nav me-auto mb-2'>
          <div className='d-flex gap-5 justify-content-between'>
            <li className='nav-item'>
              <a
                className='link-warning link-offset-3 link-underline-opacity-100 link-underline-secondary link-underline-opacity-100-hover'
                href='#'
              >
                home
              </a>
            </li>

            <li className='nav-item'>
              <a
                className='link-warning link-offset-3 link-underline-opacity-100 link-underline-secondary link-underline-opacity-100-hover'
                href='#'
              >
                mix
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='link-warning link-offset-3 link-underline-opacity-100 link-underline-secondary link-underline-opacity-100-hover'
                href='#'
              >
                quiz
              </a>
            </li>

            <li className='nav-item'>
              <a
                className='favButton link-warning link-offset-3 link-underline-opacity-100 link-underline-secondary link-underline-opacity-100-hover'
                href='#'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  class='favButton bi bi-bookmarks-fill'
                  viewBox='0 0 16 16'
                >
                  <path d='M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5z' />
                  <path d='M4.268 1A2 2 0 0 1 6 0h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L13 13.768V2a1 1 0 0 0-1-1z' />
                </svg>
              </a>
            </li>

            <li className='nav-item'>
              <a
                className='link-warning link-offset-3 link-underline-opacity-100 link-underline-secondary link-underline-opacity-100-hover'
                href='#'
              >
                <a class='link-secondary' href='#' aria-label='Search'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    fill='none'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    class='mx-3'
                    role='img'
                    viewBox='0 0 24 24'
                  >
                    <title>Search</title>
                    <circle cx='10.5' cy='10.5' r='7.5'></circle>
                    <path d='M21 21l-5.2-5.2'></path>
                  </svg>
                </a>
              </a>
            </li>
          </div>
        </ul>
      </div>
      <div className='border-bottom'></div>
    </>
  );
}
