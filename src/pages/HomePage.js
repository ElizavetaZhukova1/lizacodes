import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div>
    <h2>Home Page</h2>
    <ul>
      <li><Link to="/forHiilite">Go to Hiilite</Link></li>
      <li><Link to="/forImagineEverything">Go to Imagine Everything</Link></li>
    </ul>
  </div>
);

export default HomePage;