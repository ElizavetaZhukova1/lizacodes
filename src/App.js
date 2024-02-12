// App.js
import React from 'react';
import {Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ForHiilite from './pages/ForHiilite';
import ForImagineEverything from './pages/ForImagineEverything';
import ForGreenspace from './pages/ForGreenspace';

const App = () => {
  return (
      <Routes>
        <Route path="/ForHiilite" element={<ForHiilite />} />
        <Route path="/ForImagineEverything" element={<ForImagineEverything />} />
        <Route path="/ForGreenspace" element={<ForGreenspace />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
  );
};

export default App;