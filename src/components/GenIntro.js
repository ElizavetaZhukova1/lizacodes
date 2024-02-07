import React from 'react';
import photoWithFlame from '../assets/photo_edited_desk.png'; 
import arrow from '../assets/Arrow_blue.svg';

const GenIntro = ({care1="code", care2="data", care3="marketing", compName, compPoss}) => {

  return (
    <div className="bg-black_bg min-h-screen grid grid-cols-2 items-center">
      
        <div className="pl-14 space-y-4 text-white_bg mx-auto grid grid-rows-7">
        <h1 className="text-7xl font-head_text row-start-3">
          I'm Liza. And I care.
        </h1>
        <p className="row-start-4 font-head_text text-3xl">
          I care about <span className="text-blue_light">{care1}</span>, <span className="text-blue_light">{care2}</span>, <span className="text-blue_light">{care3}</span>, <br />
          and about <span className="text-blue_light">{compName}</span>.
        </p>
        <div className="text-white font-body_text text-xl row-span-2 row-start-5 pt-14">
         <p>
          That's why I would be honoured <br />
          to become a part of {compPoss} team!
          </p>
        </div>
        <div className="flex row-start-7 justify-center py-2">
        <img src={arrow}
    alt="Arrow pointing down"
    className="h-6 animate-bounce self-end motion-reduce:animate-none" // Centers the image horizontally within the flex container
    />
    </div>
      </div>
      
      <div>
        <img
          src={photoWithFlame}
          alt="Liza with a flame"
          className="my-auto object-right justify-end items-end"
          style={{ maxWidth: '600px'}} // Adjust the size as needed
        />
        </div>
    </div>
  );
};

export default GenIntro;