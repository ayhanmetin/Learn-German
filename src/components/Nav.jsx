import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css';
import Profile from './Profile';
import Theme2 from './Theme2';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <>
      <div style={{ borderTop: '7px solid #FEC214' }}>
        <div className='gap-5 mt-3 mb-0 me-3 ms-3 d-flex justify-content-between'>
          <div className='mt-0'>
            <Profile />
          </div>
          <div className='m-0 p-0'>
            <Theme2 />
          </div>
        </div>
      </div>

      <div className='container'>
        <ul className='navbar-nav me-auto mb-3'>
          <div className='d-flex gap-5 justify-content-center'>
            <li className='nav-item'>
              <NavLink
                className='link-warning link-offset-3 link-underline-opacity-100 link-underline-secondary link-underline-opacity-100-hover'
                to='/'
              >
                home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                className='link-warning link-offset-3 link-underline-opacity-100 link-underline-secondary link-underline-opacity-100-hover'
                to='/mix'
              >
                mix
              </NavLink>
            </li>
            {/* <li className='nav-item'>
              <NavLink
                className='favButton link-warning link-offset-3 link-underline-opacity-100 link-underline-secondary link-underline-opacity-100-hover'
                to='/favourite'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
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
