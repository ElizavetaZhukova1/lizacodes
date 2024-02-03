import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div>
    <h2 className="p-4 max-w-md mx-auto bg-red rounded-xl shadow-md">Home Page</h2>
    <ul>
      <li><Link to="/forHiilite">Go to Hiilite</Link></li>
      <li><Link to="/forImagineEverything">Go to Imagine Everything</Link></li>
    </ul>
  </div>
);

export default HomePage;