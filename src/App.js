// App.js
import React from 'react';
import {Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ForHiilite from './pages/ForHiilite';
import ForImagineEverything from './pages/ForImagineEverything';
import ForGreenspace from './pages/ForGreenspace';
import ForAcroCommerce from './pages/ForAcroCommerce';
import ForRocketNow from './pages/ForRocketNow';
import ForMinga from './pages/ForMinga';

const App = () => {
  return (
      <Routes>
        <Route path="/ForHiilite" element={<ForHiilite />} />
        <Route path="/ForImagineEverything" element={<ForImagineEverything />} />
        <Route path="/ForGreenspace" element={<ForGreenspace />} />
        <Route path="/ForAcroCommerce" element={<ForAcroCommerce />} />
        <Route path="/ForRocketNow" element={<ForRocketNow />} />
        <Route path="/ForMinga" element={<ForMinga />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
  );
};

export default App;