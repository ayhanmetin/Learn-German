import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css';
import Theme2 from './Theme2';
import { NavLink } from 'react-router-dom';
import {
  BlogIcon,
  BookmarkedIcon,
  CalIcon,
  HomeIcon,
  MixIcon,
} from './IconBox';
import WordCountDisplay from './WordCountDisplay';

export default function Nav() {
  return (
    <>
      <nav
  className='d-flex justify-content-between align-items-center rounded-bottom px-3'
  style={{ backgroundColor: '#132732', height: '50px' }}
>
  <NavLink
    to='/calendar'
    className='text-white nav1'
    aria-label='Calendar'
    style={{ flex: 1, display: 'flex', justifyContent: 'center' }}
  >
    <CalIcon />
  </NavLink>
  <NavLink
    to='/home'
    className='text-light nav1'
    aria-label='Home'
    style={{ flex: 1, display: 'flex', justifyContent: 'center' }}
  >
    <HomeIcon />
  </NavLink>
  <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
    <Theme2 />
  </div>
</nav>


      <div className='ms-0 ps-0 mb-0 pb-0'>
        <div className='d-flex altNav align-items-center justify-content-center p-0 mt-5 mb-0'>
          <nav className='d-flex justify-content-center align-items-center gap-5'>
            <NavLink
              to='/basics'
              aria-label='Living in Germany'
              className='altNav2 text-dark-emphasis'
            >
              #basics
            </NavLink>
            <NavLink
              to='/advanced'
              aria-label='Living in Germany'
              className='altNav2 text-dark-emphasis'
            >
              #advanced
            </NavLink>
          </nav>
        </div>
      </div>
      <WordCountDisplay />
    </>
  );
}
