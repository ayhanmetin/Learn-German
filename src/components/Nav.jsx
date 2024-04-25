import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css';
import Profile from './Profile';
import Theme2 from './Theme2';
import { NavLink } from 'react-router-dom';
import { BookmarkedIcon, HomeIcon, MixIcon } from './IconBox';

export default function Nav() {
  return (
    <>
      <nav
        className='d-flex justify-content-between align-items-center rounded-bottom gap-1 px-3'
        style={{ backgroundColor: '#DA513D' }}
      >
        <NavLink to='/profile' className='profilLink' aria-label='Profile'>
          <Profile />
        </NavLink>
        <div className='d-flex navLink gap-3 justify-content-center align-items-center'>
          <NavLink to='/home' className='text-light navLink' aria-label='Home'>
            <HomeIcon />
          </NavLink>
          <NavLink
            to='/favorites'
            className='text-light navLink'
            aria-label='Favorites'
          >
            <BookmarkedIcon />
          </NavLink>
        </div>
        <Theme2 />
      </nav>

      <div className='ms-0 ps-0 mb-0 pb-0'>
        <div className='learnGerman ms-2 mt-2 text-body-emphasis'>
          Deutsch lernen für TestDaF, Goethe-Institut und TELC-Zertifizierung
        </div>

        <div className='d-flex altNav align-items-center justify-content-center p-0 mt-5 mb-0'>
          <nav className='d-flex justify-content-center align-items-center gap-3'>
            <NavLink
              to='/basics'
              aria-label='Living in Germany'
              className='altNav2'
            >
              #basics
            </NavLink>
            <NavLink
              to='/mix'
              aria-label='Explore Mixed German Words'
              className='altNav2'
            >
              #mixed
            </NavLink>
            <NavLink
              to='/advanced'
              aria-label='Explore Advanced German Words'
              className='altNav2'
            >
              #advanced
            </NavLink>
          </nav>
        </div>
      </div>
      <div className='border-bottom border-success p-2 border-opacity-25'></div>
    </>
  );
}
