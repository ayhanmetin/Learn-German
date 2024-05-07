import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import WordApp from './components/WordApp';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Favorites from './components/Favorites';
import Mix from './Categories/Mix';
import Basics from './Categories/Basics';
import Travel from './Categories/Travel';
import { Analytics } from '@vercel/analytics/react';
import About from './components/About';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className='bg-transparent container col-12'
      style={{
        minHeight: '100vh',
        paddingLeft: isMobile ? 0 : '',
        paddingRight: isMobile ? 0 : '',
        marginLeft: isMobile ? 0 : '',
        marginRight: isMobile ? 0 : '',
      }}
    >
      <Analytics />
      <div
        className='container bg-transparent'
        style={{ maxWidth: '100%', padding: 0 }}
      >
        <div className='row justify-content-center mt-0'>
          <div className='col-12 col-md-8 mt-0'>
            <div className='mt-0 mb-5'>
              <Nav />
            </div>
            <Routes>
              <Route path='/' element={<WordApp />} />
              <Route path='/home' element={<WordApp />} />
              <Route path='/mix' element={<Mix />} />
              <Route path='/travel' element={<Travel />} />
              <Route path='/about' element={<About />} />
              <Route path='/basics' element={<Basics />} />
              <Route path='/favorites' element={<Favorites />} />

            </Routes>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
