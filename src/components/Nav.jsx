import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css';
import Theme2 from './Theme2';
import { NavLink } from 'react-router-dom';
import { HomeIcon, CalIcon, GameIcon } from './IconBox';
import WordCountDisplay from './WordCountDisplay';

export default function Nav() {
  return (
    <>
      <nav
        className='d-flex justify-content-between align-items-center rounded-bottom px-3'
        style={{ backgroundColor: 'black', height: '50px' }}
      >
        {/* First group at the start */}
        <div className='d-flex gap-3 align-items-center'>
          <NavLink to='/basics' aria-label='B1' className='altNav2 ms-3 text-light'>
            B1
          </NavLink>
          <NavLink
            to='/advanced'
            aria-label='C1'
            className='altNav2 text-light'
          >
            C1
          </NavLink>
        </div>

        <div className='d-flex justify-content-center align-items-center gap-4 flex-grow-1'>
          <NavLink to='/home' className='text-light nav1' aria-label='Home'>
            <HomeIcon />
          </NavLink>
          <NavLink
            to='/calendar'
            className='text-white nav1'
            aria-label='Calendar'
          >
            <CalIcon />
          </NavLink>
          <NavLink to='/quiz' className='text-light nav1' aria-label='Quiz'>
            <GameIcon />
          </NavLink>
        </div>
        <div className='me-3'>
          <Theme2 />
        </div>
      </nav>
      <WordCountDisplay />
    </>
  );
}
