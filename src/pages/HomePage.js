import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div>
    <h2 className="p-4 max-w-md mx-auto bg-red rounded-xl shadow-md text-blue_dark">Home Page</h2>
    <p className="font-head_text"> Testing Heading font</p>
    <p className="font-body_text"> Testing Body font</p>
    <p className="font-hl_text"> Testing highlight font</p>
    <ul>
      <li><Link to="/forHiilite">Go to Hiilite</Link></li>
      <li><Link to="/forImagineEverything">Go to Imagine Everything</Link></li>
    </ul>
  </div>
);

export default HomePage;