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
      <div className='container mb-0 pb-0'>
        <div
          className='container p-2 mb-1 pb-2 d-flex justify-content-between align-items-center rounded-bottom gap-3 px-3'
          style={{ backgroundColor: '#DA513D' }}
        >
          <NavLink to='/profile' className='profile-link'>
            <Profile />
          </NavLink>

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

          <div>
            <Theme2 />
          </div>
        </div>

        <div className='learn-german mt-2 fw-light text-body-emphasis'>
          Deutsch lernen für TestDaF, Goethe-Institut und TELC-Zertifizierung
        </div>
      </div>
    </>
  );
}
