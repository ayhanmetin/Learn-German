import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';

import Nav from './components/Nav';
import WordApp from './components/WordApp';
import Advanced from './Categories/Advanced';
import Today from './components/Today';
import Quiz from './Categories/Quiz';
import WordList from './Categories/WordList';
import WordDetail from './Categories/WordDetail';
import Home from './components/Home';
import TestGame from './components/TestGame';
import Grammar from './components/Grammar';
import './app.css';

function App() {
  return (
    <>
      <div className='d-flex justify-content-center align-items-center '>
        <div className='col-12 col-md-8'>
          <Nav />
          <Analytics />
          <Routes>
            <Route path='/grammar' element={<Grammar />} />
            <Route path='/home' element={<Home />} />
            <Route path='/' element={<Home />} />
            <Route path='/advanced' element={<Advanced />} />
            <Route path='/basics' element={<WordApp />} />
            <Route path='/word/:wordName' element={<WordDetail />} />
            <Route path='/word' element={<WordList />} />
            <Route path='/test' element={<TestGame />} />
            <Route path='/quiz' element={<Quiz />} />
            <Route path='/today/:wordNo' element={<Today />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
