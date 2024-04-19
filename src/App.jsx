import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import WordApp from './components/WordApp';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className='bg-transparent' style={{ minHeight: '100vh' }}>
        <div className='container bg-transparent'>
          <div className='row justify-content-center mt-0'>
            <div className='col-12 col-md-8 mt-0 '>
              <div className='mt-0 mb-5'>
                <Nav />
              </div>
              <WordApp />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
