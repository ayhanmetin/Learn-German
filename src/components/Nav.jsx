import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Theme2 from './Theme2';
import { NavLink, Link } from 'react-router-dom';
import wordData from '../wordData';
import "./nav.css"

export default function Nav() {
  const wordCount = wordData.length;

  return (
    <>
      <div className='pt-0 mt-4 d-flex justify-content-center align-items-center navMain1'>
        <Theme2 />
      </div>
      <div className='d-flex flex-row mb-3 mt-0 justify-content-center align-items-center navMain1'>
        <div className='p-2'>
          <NavLink
            to='/home'
            className='text-body-secondary navMain1'
            aria-label='Home'
          >
            <i className='fa fa-chess-knight text-body-secondary me-2'></i>
            Deutsch lernen
          </NavLink>
        </div>
        <div className='p-2'>
          <Link to='/word' className='wordCount text-body-secondary navMain1'>
            Total words: {wordCount}
          </Link>
        </div>
      </div>
    </>
  );
}
