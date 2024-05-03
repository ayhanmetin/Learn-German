import React from 'react';
import GoTop from './GoTop';
import Footer2 from './Footer2';

export default function Footer() {
  return (
    <>
      <div className='container col-12'>
        <GoTop />
        {/* <div className='mb-0 pb-0'>
        <p className='emailText mb-2'>
          Word of the Day, straight to your inbox!
        </p>
        <SubscribeForm />
      </div> */}
        <Footer2 />
      </div>
    </>
  );
}
