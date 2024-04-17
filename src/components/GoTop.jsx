import React from 'react';

export default function GoTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className='container d-flex justify-content-end mt-3 pb-4'>
        <button
          onClick={scrollToTop}
          className='btn btn-dark text-white'
          aria-label='Go to top'
        >
          Go to top ▲
        </button>
      </div>
    </>
  );
}
