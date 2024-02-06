import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className="bg-black_bg font-head_text text-white_bg py-10 justify-center flex items-center flex-col space-y-10 h-screen px-10">
   <h1 className="text-4xl text-left">Oops... Looks like this isn't the page you were looking for!
   </h1>
   <h2 className="text-4xl text-left">
   Please send me an email if you have any questions!
   </h2>
   <p className="font-hl_text text-3xl underline decoration-blue_light pt-2">elizavetazhukova57@gmail.com</p>
    <ul>
      <li><Link to="/forHiilite">Go to Hiilite</Link></li>
      <li><Link to="/forImagineEverything">Go to Imagine Everything</Link></li>
    </ul>
  </div>
);

export default HomePage;