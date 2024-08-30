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
      <div className='d-flex  flex-column justify-content-center align-items-center'>
        <div className='d-flex flex-column mb-1 mt-0 justify-content-center align-items-center navMain1'>
          <div className='pt-0'></div>
        </div>

        <div className='navMain2 border-bottom p-2'>
          <NavLink className='text-body-secondary' to='/home' aria-label='Home'>
            <i class='fa fa-house'></i>
          </NavLink>
          <NavLink to='/word' aria-label='Home'>
            <i className='flag'>📚</i>
            <Link to='/word' className='text-body-secondary ms-2 count p-0 m-0'>
              {wordCount}
            </Link>
          </NavLink>
          <Link to='/quiz' className='text-body-secondary totalWords p-0 m-0'>
            Quiz
          </Link>
          <Link to='/basics' className='text-body-secondary totalWords p-0 m-0'>
            B1 Wörter
          </Link>
          <Link
            to='/advanced'
            className='text-body-secondary totalWords p-0 m-0'
          >
            C1 Wörter
          </Link>
        </div>
      </div>
    </>
  );
}
