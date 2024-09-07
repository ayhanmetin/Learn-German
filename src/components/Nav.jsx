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
      <div className='d-flex  flex-column justify-content-center align-items-center'>
        <div className='d-flex flex-column mb-1 mt-0 justify-content-center align-items-center navMain1'>
          <div className='pt-0'></div>
        </div>

        <div className='navMain2'>
          <span className='navMain3'>
            <Link
              to='/'
              className='text-body-secondary count m-0 p-0'
              onClick={e => {
                e.preventDefault();
                window.location.href = '/';
              }}
            >
              <i className='flag'>📚</i>
            </Link>

            <Link to='/' className='text-body-secondary count m-0 p-0'>
              <i className='flag'></i> {wordCount}
            </Link>
          </span>
          <Link to='/quiz' className='text-body-secondary totalWords p-0 m-0'>
            🎯 Quiz
          </Link>
          <Link
            to='/flashcard'
            className='text-body-secondary printIconNav totalWords p-0 m-0'
          >
            🖨️
          </Link>
          <Link to='/' className='text-body-secondary totalWords p-0 m-0'>
            <Theme2 />
          </Link>
        </div>
      </div>
    </>
  );
}
