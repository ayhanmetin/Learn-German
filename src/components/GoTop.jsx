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
          className='btn btn-link p-0 border-0 text-body-emphasis'
          aria-label='Go to top'
          style={{ background: 'none', boxShadow: 'none' }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='25'
            height='25'
            fill='currentColor'
            class='bi bi-caret-up-fill'
            viewBox='0 0 16 16'
          >
            <path d='m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z' />
          </svg>
        </button>
      </div>
    </>
  );
}
