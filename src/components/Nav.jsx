import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css';
import Profile from './Profile';
import Theme2 from './Theme2';
import { NavLink } from 'react-router-dom';
import { BookmarkedIcon, HomeIcon, MixIcon } from './IconBox';

export default function Nav() {
  return (
    <div className='container mb-0 pb-0'>
      <nav className='d-flex navLink justify-content-between align-items-center p-2 rounded-bottom gap-3 px-3' style={{ backgroundColor: '#DA513D' }}>
        <NavLink to='/profile' className='profile-link' aria-label='Profile'>
          <Profile />
        </NavLink>
        <NavLink to='/home' className='text-light' aria-label='Home'>
          <HomeIcon />
        </NavLink>
        <NavLink to='/mix' className='text-light' aria-label='Mix'>
          <MixIcon />
        </NavLink>
        <NavLink to='/favorites' className='text-light' aria-label='Favorites'>
          <BookmarkedIcon />
        </NavLink>
        <Theme2 />
      </nav>

      <div className='learnGerman mt-2 fw-light text-body-emphasis'>
        Deutsch lernen für TestDaF, Goethe-Institut und TELC-Zertifizierung
      </div>
    </div>
  );
}
