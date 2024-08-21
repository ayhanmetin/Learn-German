import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Theme2 from './Theme2';
import { NavLink, Link } from 'react-router-dom';
import wordData from '../wordData';

export default function Nav() {
  const wordCount = wordData.length;

  return (
    <>
      <div className='pt-0 mt-4 wordCount d-flex justify-content-center align-items-center'>
        <Theme2 />
      </div>
      <div className='d-flex flex-row mb-3 mt-0 justify-content-center align-items-center'>
        <div className='p-2 wordCount'>
          <NavLink
            to='/home'
            className='text-body-secondary wordCount'
            aria-label='Home'
          >
            <i className='fa fa-chess-knight text-body-secondary me-2'></i>
            Deutsch lernen
          </NavLink>
        </div>
        <div className='p-2 wordCount'>
          <Link to='/word' className='wordCount text-body-secondary'>
            Total words: {wordCount}
          </Link>
        </div>
      </div>
    </>
  );
}
