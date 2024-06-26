import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import WordApp from './components/WordApp';
import Footer2 from './components/Footer2';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Basics from './Categories/Basics';
import { Analytics } from '@vercel/analytics/react';
import About from './components/About';
import Advanced from './Categories/Advanced';
import Today from './components/Today';
import './app.css';
import Quiz from './Categories/Quiz';
import WordList from './Categories/WordList';
import WordDetail from './Categories/WordDetail';

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
      className='d-flex flex-column min-vh-100'
      style={{
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
        <div className='d-flex justify-content-center align-items-center mt-0'>
          <div className='col-12 col-md-8 mt-0'>
            <div className='mt-0 mb-5'>
              <Nav />
            </div>
            <div className='d-flex justify-content-center align-items-center'>
              <Routes>
                <Route path='/' element={<WordApp />} />
                <Route path='/home' element={<WordApp />} />
                <Route path='/advanced' element={<Advanced />} />
                <Route path='/about' element={<About />} />
                <Route path='/basics' element={<Basics />} />
                <Route path='/wordlist/:index' element={<WordDetail />} />
                <Route path='/wordlist' element={<WordList />} />
                <Route path='/quiz' element={<Quiz />} />
                <Route path='/today/:wordNo' element={<Today />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-auto'>
        <Footer2 />
      </div>
    </div>
  );
}

export default App;
