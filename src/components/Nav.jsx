import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css';
import Theme2 from './Theme2';
import { NavLink } from 'react-router-dom';
import WordCountDisplay from './WordCountDisplay';

export default function Nav() {
  return (
    <>
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <div className='p-2'>
          <Theme2 />
        </div>
        <div className='pt-1'>
          <NavLink
            to='/home'
            className='text-body-secondary nav1'
            aria-label='Home'
          >
            <i className='me-1 fa fa-chess-knight text-body-secondary'></i>
            Deutsch lernen
          </NavLink>
        </div>
        <div className='p-1'>
          <WordCountDisplay />
        </div>
        <div className='p-1'>
          <NavLink
            to='/quiz'
            className='nav1 text-body-secondary'
            aria-label='Quiz 2'
          >
            Quiz
          </NavLink>
        </div>
      </div>
    </>
  );
}
