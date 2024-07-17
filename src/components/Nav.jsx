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
      <div className='col-10'></div>
      <nav
        className='d-flex justify-content-between align-items-center rounded-bottom px-3'
        style={{ backgroundColor: 'black', height: '50px' }}
      >
      

        <div className='d-flex ms-5 mb-1 justify-content-center align-items-center gap-4 flex-grow-1'>
          <NavLink to='/home' className='text-light nav1' aria-label='Home'>
            <HomeIcon />
          </NavLink>
          
          <NavLink to='/quiz' className='text-light mt-1' aria-label='Quiz'>
            <i className='score-item  fas fa-ghost'></i>
          </NavLink>
        </div>
        <div className='me-3'>
          <Theme2 />
        </div>
      </nav>

      <div className='d-flex mb-1 justify-content-start align-items-center gap-1 flex-grow-1'>
        <WordCountDisplay />
      </div>
      {/* <div className='d-flex mb-1 justify-content-start align-items-center gap-1 flex-grow-1'>
        <WordCountDisplay />
      </div> */}
    </>
  );
}
