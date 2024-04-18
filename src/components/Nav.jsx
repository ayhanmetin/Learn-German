import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css';
import Profile from './Profile';
import Theme2 from './Theme2';
import { NavLink } from 'react-router-dom';
import WordCountDisplay from './WordCountDisplay';

export default function Nav() {
  return (
    <>
      <div style={{ borderTop: '7px solid #FEC214' }}>
        <div className='gap-5 mt-3 mb-0 me-3 ms-3 d-flex justify-content-between'>
          <div className='mt-0'>
            <Profile />
          </div>
          <div>
            <WordCountDisplay />
          </div>
          <div className='m-0 p-0'>
            <Theme2 />
          </div>
        </div>
      </div>

      <div className='container mt-5'>
        <ul className='navbar-nav me-auto mb-3'>
          <div className='d-flex gap-5 justify-content-center'>
            <li className='nav-item'>
              <NavLink
                className='favButton link-warning link-offset-3 link-underline-opacity-25 link-underline-opacity-100-hover'
                to='/'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='30'
                  height='30'
                  fill='currentColor'
                  class='favButton bi bi-house'
                  viewBox='0 0 16 16'
                >
                  <path d='M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z' />
                </svg>
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                className='favButton link-warning link-offset-3 link-underline-opacity-100 link-underline-secondary link-underline-opacity-100-hover'
                to='/mix'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='30'
                  height='30'
                  fill='currentColor'
                  class='favButton bi bi-shuffle'
                  viewBox='0 0 16 16'
                >
                  <path
                    fill-rule='evenodd'
                    d='M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.6 9.6 0 0 0 7.556 8a9.6 9.6 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.6 10.6 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.6 9.6 0 0 0 6.444 8a9.6 9.6 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5'
                  />
                  <path d='M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192m0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192' />
                </svg>
              </NavLink>
            </li>
            {/* <li className='nav-item'>
              <NavLink
                className='favButton link-warning link-offset-3 link-underline-opacity-100 link-underline-secondary link-underline-opacity-100-hover'
                to='/favourite'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='30'
                  height='30'
                  fill='currentColor'
                  className='favButton bi bi-bookmarks-fill'
                  viewBox='0 0 16 16'
                >
                  <path d='M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5z' />
                  <path d='M4.268 1A2 2 0 0 1 6 0h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L13 13.768V2a1 1 0 0 0-1-1z' />
                </svg>
              </NavLink>
            </li> */}
          </div>
        </ul>
      </div>
    </>
  );
}
