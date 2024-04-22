import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css';
import Profile from './Profile';
import Theme2 from './Theme2';
import { NavLink } from 'react-router-dom';
import { BookmarkedIcon, HomeIcon, MixIcon } from './IconBox';
// import WordCountDisplay from './WordCountDisplay';
// import wordData from '../wordData';

export default function Nav() {
  return (
    <>
      <div className='container mb-5 pb-2'>
        <div
          className='d-flex justify-content-between align-items-center rounded-bottom gap-3'
          style={{
            backgroundColor: '#DA513D',
            paddingLeft: '29px',
            paddingRight: '29px',
            padding: '1px',
            
          }}
        >
          <div className='profilLink'>
            <NavLink to='/profile' className=''>
              <Profile />
            </NavLink>
          </div>

          <div className='d-flex navLink justify-content-center text-light align-items-center gap-5'>
            <NavLink to='/home' className='text-light'>
              <HomeIcon />
            </NavLink>
            <NavLink to='/mix' className='text-light'>
              <MixIcon />
            </NavLink>
            <NavLink to='/favorites' className='text-light'>
              <BookmarkedIcon />
            </NavLink>
          </div>

          <div className='position-relative' style={{ top: '-3px' }}>
            <Theme2 />
          </div>
        </div>
        <div className='learnGerman mt-2 fw-light text-body-emphasis'>
          Deutsch lernen für TestDaF, Goethe-Institut und TELC-Zertifizierung
        </div>
      </div>

      {/* <div className='container mt-5'>
        <ul className='navbar-nav me-auto mb-3'>
          <div className='d-flex gap-5 justify-content-center'>
            <li className='nav-item'>
              <NavLink
                className='favButton link-warning link-offset-3 link-underline-opacity-25 link-underline-opacity-100-hover'
                to='/'
              >
                <HomeIcon />
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                className='favButton link-warning link-offset-3 link-underline-opacity-100 link-underline-secondary link-underline-opacity-100-hover'
                to='/mix'
              >
                <MixIcon />
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                className='favButton link-warning link-offset-3 link-underline-opacity-100 link-underline-secondary link-underline-opacity-100-hover'
                to='/favorites'
              >
                <BookmarkedIcon />
              </NavLink>
            </li>
          </div>
        </ul>
      </div> */}
    </>
  );
}
