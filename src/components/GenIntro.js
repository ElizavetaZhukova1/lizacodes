import React from 'react';
import photoWithFlame from '../assets/photo_edited_desk.png'; 
import mobPhoto from '../assets/photo_edited_phone.png'; 
import arrow from '../assets/Arrow_blue.svg';

const GenIntro = ({care1="code", care2="data", care3="marketing", compName, compPoss}) => {

  return (
    <div className="bg-black_bg min-h-screen flex items-center xs:max-md:flex-col xs:max-md:pt-16 xs:max-md:pb-2 xs:max-md:justify-evenly">
      
        <div className="md:pl-8 md:space-y-4 text-white_bg md:mx-auto md:grid md:grid-rows-7 xs:max-md:flex xs:max-md:flex-col xs:max-md:space-y-4 xs:max-md:text-left">
        <h1 className="md:text-7xl xs:max-md:text-3xl font-head_text md:row-start-3 xs:max-md:pt-4">
          I'm Liza. And I care.
        </h1>
        <p className="md:row-start-4 font-head_text md:text-3xl xs:max-md:text-xl">
          I care about <span className="text-blue_light">{care1}</span>, <span className="text-blue_light">{care2}</span>, <span className="text-blue_light">{care3}</span>, <br />
          and about <span className="text-blue_light">{compName}</span>.
        </p>
        <div className="text-white font-body_text xs:max-md:text-md md:text-xl md:row-span-2 md:row-start-5 md:pt-14">
         <p>
          That's why I would be honoured <br />
          to become a part of {compPoss} team!
          </p>
        </div>
        <div className="xs:max-md:hidden md:flex md:row-start-7 justify-center md:py-2">
        <img src={arrow}
    alt="Arrow pointing down"
    className="md:h-6 animate-bounce self-end motion-reduce:animate-none" // Centers the image horizontally within the flex container
    />
    </div>
      </div>
      
     <div>
        <img
          src={photoWithFlame}
          alt="Liza with a flame"
          className="my-auto object-right justify-end items-end xs:max-md:hidden"
          style={{ maxWidth: '600px'}} // Adjust the size as needed
        />
        <img
          src={mobPhoto}
          alt="Liza with a flame"
          className="md:hidden mx-auto object-center py-4"
          style={{ maxWidth: '300px'}} // Adjust the size as needed
        />
  </div>
  <div className="md:hidden justify-center py-2">
        <img src={arrow}
    alt="Arrow pointing down"
    className="h-6 animate-bounce self-end motion-reduce:animate-none" // Centers the image horizontally within the flex container
    />
    </div>
  
    </div>
  );
};

export default GenIntro;