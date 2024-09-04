import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

import Nav from './components/Nav';
import WordApp from './components/WordApp';
import Quiz from './Categories/Quiz';
import WordList from './Categories/WordList';
import WordDetail from './Categories/WordDetail';

import './app.css';

function App() {
  return (
    <div className='d-flex justify-content-center align-items-center '>
      <div className='col-12 col-md-8'>
        <Nav />
        <Analytics />
        <SpeedInsights />
        <Routes>
          <Route path='/home' element={<WordApp />} />
          <Route path='/' element={<WordApp />} />
          <Route path='/word/:wordName' element={<WordDetail />} />
          <Route path='/word' element={<WordList />} />
          <Route path='/quiz' element={<Quiz />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
