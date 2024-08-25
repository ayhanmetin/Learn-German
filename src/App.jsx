import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import WordApp from './components/WordApp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Advanced from './Categories/Advanced';
import Today from './components/Today';
import './app.css';
import Quiz from './Categories/Quiz';
import WordList from './Categories/WordList';
import WordDetail from './Categories/WordDetail';
import Calendar from './Categories/Calendar';
import Home from './components/Home';
import Basics from './Categories/Basics';
import B1exam from './components/B1exam';
import B2exam from './components/B2exam';
import Cexam from './components/Cexam';
import Fun from './components/Fun';
import TestGame from './components/TestGame';
import Grammar from './components/Grammar';


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
            <div className='mt-0 mb-4'>
              <Nav />
            </div>
            <div className=''>
              <Routes>
                <Route path='/grammar' element={<Grammar />} />
                <Route path='/home' element={<Home />} />
                <Route path='/' element={<Home />} />
                <Route path='/advanced' element={<Advanced />} />
                <Route path='/sprichwörter' element={<Fun />} />
                <Route path='/calendar' element={<Calendar />} />
                <Route path='/b1exam' element={<B1exam />} />
                <Route path='/b2exam' element={<B2exam />} />
                <Route path='/cexam' element={<Cexam />} />
                <Route path='/basics' element={<WordApp />} />
                <Route path='/word/:wordName' element={<WordDetail />} />
                <Route path='/word' element={<WordList />} />
                <Route path='/test' element={<TestGame />} />
                <Route path='/quiz' element={<Quiz />} />
                <Route path='/today/:wordNo' element={<Today />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
