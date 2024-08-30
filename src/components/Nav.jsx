import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Theme2 from './Theme2';
import { NavLink, Link } from 'react-router-dom';
import wordData from '../wordData';
import './nav.css';

export default function Nav() {
  const wordCount = wordData.length;

  return (
    <>
      <div className='pt-0 mt-1 d-flex justify-content-center align-items-center navMain1'>
        <Theme2 />
      </div>
      <div className='d-flex flex-column mb-3 mt-0 justify-content-center align-items-center navMain1'>
        <div className='pt-3'>
          <NavLink to='/home' aria-label='Home'>
            <i className='flag'>📚</i>
          </NavLink>
        </div>
        <div className='totalWords'>
          <Link to='/word' className='text-body-secondary totalWords p-0 m-0'>
            Total words: {wordCount}
          </Link>
        </div>
      </div>
    </>
  );
}
