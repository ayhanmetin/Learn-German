import React, { useState } from 'react';

function ThemeIcon() {
  const [theme, setTheme] = useState('dark');  // Starts in 'dark' mode

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-bs-theme', newTheme);
    setTheme(newTheme);
  };

  const containerStyles = {
    background: theme === 'light' ? '#666' : '#DDD',
    width: '35px',  
    height: '16px', 
    borderRadius: '10px',  
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '3px',  
    cursor: 'pointer',
    boxSizing: 'border-box',
  };

  const buttonStyles = {
    width: '12px',  
    height: '12px', 
    borderRadius: '50%',
    backgroundColor: theme === 'light' ? '#FFF' : '#333',
    transition: 'transform 0.25s ease-out',
    transform: theme === 'light' ? 'translateX(0)' : 'translateX(18px)',  // Adjusted for new container width
  };

  return (
    <div style={containerStyles} onClick={toggleTheme}>
      <div style={buttonStyles}></div>
    </div>
  );
}

export default ThemeIcon;
