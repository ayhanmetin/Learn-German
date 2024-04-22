import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import WordApp from './components/WordApp';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Mix from './components/Mix';
import Favorites from './components/Favorites';

function App() {
  return (
    <>
      <div
        className='bg-transparent container col-12'
        style={{ padding: 0, margin: 0 }}
      >
        <div
          className='container bg-transparent'
          style={{ paddingTop: 0, marginTop: 0 }}
        >
          <div
            className='row justify-content-center'
            style={{ paddingTop: 0, marginTop: 0 }}
          >
            <div
              className='col-12 col-md-8'
              style={{ paddingTop: 0, marginTop: 0 }}
            >
              <div style={{ marginTop: 0, marginBottom: 5 }}>
                <Nav />
              </div>
              <Routes>
                <Route path='/' element={<WordApp />} />
                <Route path='/home' element={<WordApp />} />
                <Route path='/mix' element={<Mix />} />
                <Route path='/favorites' element={<Favorites />} />
              </Routes>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
