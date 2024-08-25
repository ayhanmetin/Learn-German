import React, { useState } from 'react';

const lightThemeIcon = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='20'
    height='20'
    fill='currentColor'
    className='text-black bi bi-toggle-on text-light'
    viewBox='0 0 16 16'
  >
    <path d='M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8' />
  </svg>
);

const darkThemeIcon = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='20'
    height='20'
    fill='white'
    className='bi bi-toggle-off '
    viewBox='0 0 16 16'
  >
    <path d='M11 4a4 4 0 0 1 0 8H8a5 5 0 0 0 2-4 5 5 0 0 0-2-4zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8M0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5' />
  </svg>
);

function Theme2() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-bs-theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className='btn svgBtn align-items-center d-flex'
    >
      {theme === 'light' ? lightThemeIcon : darkThemeIcon}
    </button>
  );
}

export default Theme2;
