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
        <nav
          className='d-flex navLink justify-content-between align-items-center p-1 rounded-bottom gap-3 px-3'
          style={{ backgroundColor: '#DA513D' }}
        >
          <NavLink to='/profile' className='profile-link' aria-label='Profile'>
            <Profile />
          </NavLink>
          <NavLink to='/home' className='text-light' aria-label='Home'>
            <HomeIcon />
          </NavLink>
          <NavLink to='/mix' className='text-light' aria-label='Mix'>
            <MixIcon />
          </NavLink>
          <NavLink
            to='/favorites'
            className='text-light'
            aria-label='Favorites'
          >
            <BookmarkedIcon />
          </NavLink>
          <Theme2 />
        </nav>

        <div className='learnGerman mt-2 fw-light text-body-emphasis'>
          Deutsch lernen für TestDaF, Goethe-Institut und TELC-Zertifizierung
        </div>

        <div className='d-flex altNav align-items-center justify-content-center mt-4 border-bottom p-2 mb-2'>
          <nav className='d-flex justify-content-center align-items-center gap-4'>
            <NavLink
              to='/mix'
              aria-label='Explore Mixed Topics'
              className='altNav2'
            >
              #mixed
            </NavLink>
            <NavLink
              to='/living-in-germany'
              aria-label='Living in Germany Guide'
              className='altNav2'
            >
              #living
            </NavLink>
            <NavLink
              to='/business'
              aria-label='Business Related Words'
              className='altNav2'
            >
              #business
            </NavLink>
            <NavLink
              to='/bureaucracy'
              aria-label='Understanding Bureaucracy in Germany'
              className='altNav2'
            >
              #bureaucracy
            </NavLink>
            <NavLink
              to='/advanced-german'
              aria-label='Advanced German Words'
              className='altNav2'
            >
              #advanced
            </NavLink>
          </nav>
        </div>
      </div>
    </>
  );
}
