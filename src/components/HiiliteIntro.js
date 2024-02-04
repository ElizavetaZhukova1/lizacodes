import React from 'react';
import photoWithFlame from '../assets/photo_edited_desk.png'; // Adjust the path as necessary

const HiiliteIntro = () => {
  return (
    <div className="bg-black_bg min-h-screen grid grid-cols-2 items-center">
      
        <div className="pl-14 space-y-4 text-white_bg mx-auto grid grid-rows-4">
        <h1 className="text-7xl font-head_text">
          I'm Liza. And I care.
        </h1>
        <p className="font-head_text text-3xl">
          I care about <span className="text-blue_light">code</span>, <span className="text-blue_light">data</span>, <span className="text-blue_light">marketing</span>, <br />
          and about <span className="text-blue_light">Hiilite</span>.
        </p>
        <p className="text-white font-body_text text-xl row-span-2 row-start-4">
          That's why I would be honoured <br />
          to become a part of Hiilite's team!
        </p>
      </div>
      <div>
        <img
          src={photoWithFlame}
          alt="Liza with a flame"
          className="my-auto object-right justify-end items-end"
          style={{ maxWidth: '600px' }} // Adjust the size as needed
        />
        </div>
    </div>
  );
};

export default HiiliteIntro;