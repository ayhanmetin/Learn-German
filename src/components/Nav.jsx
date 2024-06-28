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
        className='d-flex justify-content-between align-items-center rounded-bottom gap-1 px-3'
        style={{ backgroundColor: '#132732' }}
      >
        <NavLink
          to='/calendar'
          className='text-white calIcon'
          aria-label='Calendar'
        >
          <CalIcon />
        </NavLink>
        <div className='d-flex navLink gap-0 justify-content-center align-items-center'>
          <NavLink
            to='/home'
            className='text-light navLink me-5'
            aria-label='Home'
          >
            <HomeIcon />
          </NavLink>
          {/* Uncomment or modify these as needed for other navigation links */}
          {/* <NavLink
            to='/favorites'
            className='text-light navLink'
            aria-label='Favorites'
          >
            <BookmarkedIcon />
          </NavLink>
          <NavLink to='/blog' className='text-light navLink' aria-label='Blog'>
            <BlogIcon />
          </NavLink> */}
        </div>
        <Theme2 />
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
            {/* Additional links for travel, quiz, etc., can be added here */}
            {/* <NavLink
              to='/travel'
              aria-label='Explore Advanced German Words'
              className='altNav2'
            >
              #travel
            </NavLink>
            <NavLink
              to='/quiz'
              aria-label='Explore Mixed German Words'
              className='altNav2 quiz-button'
            >
              #quiz
            </NavLink> */}
          </nav>
        </div>
      </div>
      <WordCountDisplay />
      <div className='border-bottom border-success p-2 border-opacity-25'></div>
    </>
  );
}
