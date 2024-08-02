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
        <NavLink to='/home' className='text-light nav1' aria-label='Home'>
          <i className='me-1 fa fa-chess-knight'></i> Deutsch lernen
        </NavLink>
        <div className='d-flex gap-5 justify-content-end align-items-center flex-grow-1 me-2'>
          <NavLink
            to='/quiz'
            className='nav1 text-light mt-0'
            aria-label='Quiz 2'
          >
            Quiz{' '}
          </NavLink>
        </div>
      </nav>
      <div className='d-flex align-items-center mb-1'>
        <div className='flex-grow-1 d-flex justify-content-start align-items-center gap-1'>
          <WordCountDisplay />
        </div>
        <div className='me-4 mt-2 d-flex justify-content-end'>
          <Theme2 />
        </div>
      </div>
    </>
  );
}
