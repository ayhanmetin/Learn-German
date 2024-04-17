import React, { useState } from 'react';

function ThemeIcon() {
  const [theme, setTheme] = useState('dark'); // Starts in 'dark' mode

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-bs-theme', newTheme);
    setTheme(newTheme);
  };

  const containerStyles = {
    background: theme === 'light' ? '#FFCE01' : '#EDEDED',
    width: '25px',
    height: '14px',
    borderRadius: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '3px',
    cursor: 'pointer',
    boxSizing: 'border-box',
  };

  const buttonStyles = {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: theme === 'light' ? '#000000' : '#000000',
    transition: 'transform 0.25s ease-out',
    transform: theme === 'light' ? 'translateX(0)' : 'translateX(9px)', 
  };

  return (
    <div style={containerStyles} onClick={toggleTheme}>
      <div style={buttonStyles}></div>
    </div>
  );
}

export default ThemeIcon;
