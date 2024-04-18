import React, { useState } from 'react';
import './nav.css';

const lightThemeIcon = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='23'
    height='23'
    fill='currentColor'
    class='bi bi-brightness-low-fill'
    viewBox='0 0 16 16'
  >
    <path d='M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8.5 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m5-5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-11 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m9.743-4.036a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707m-7.779 7.779a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707m7.072 0a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707M3.757 4.464a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707' />
  </svg>
);

const darkThemeIcon = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='23'
    height='23'
    fill='currentColor'
    class='bi bi-mask'
    viewBox='0 0 16 16'
  >
    <path d='M6.225 1.227A7.5 7.5 0 0 1 10.5 8a7.5 7.5 0 0 1-4.275 6.773 7 7 0 1 0 0-13.546M4.187.966a8 8 0 1 1 7.627 14.069A8 8 0 0 1 4.186.964z' />
  </svg>
);

export default function Theme2() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-bs-theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <button onClick={toggleTheme} className='btn svgBtn'>
      {theme === 'light' ? lightThemeIcon : darkThemeIcon}
    </button>
  );
}
