import React from 'react';
import codeBackground from '../assets/Code_bg_brighter.png';
import flameRed from '../assets/Flame_red.svg';
import flameBlue from '../assets/Flame_blue.svg';

const ContactMe = () => {
  return (
    <div className="bg-white_bg pb-8">
     <div className="bg-auto py-4 mb-8 text-center" style={{ backgroundImage: `url(${codeBackground})` }}>
      <span className="text-white_bg font-head_text text-6xl" >Contact Me</span>
    </div>
    
    <div className="flex flex-col space-y-6 text-black_bg font-hl_text text-left items-start ml-[15%]">
        <div className="flex space-x-4 text-end items-end">
        <img src={flameRed} alt="Red Flame" className="h-12" />
        <div className="text-3xl">elizavetazhukova57@gmail.com</div>
        </div>
        <div className="flex space-x-4 ml-1 items-end">
        <img src={flameBlue} alt="Blue Flame" className="h-7" />
        <a href="https://www.linkedin.com/in/elizaveta-zhukova-computer-science/" className=" hover:text-blue_light text-2xl" target="_blank" rel="noopener noreferrer">
        linkedin.com/in/elizaveta-zhukova-computer-science/</a>
        </div>
        <div className="flex space-x-4 ml-1 items-end">
        <img src={flameBlue} alt="Blue Flame" className="h-7" />
        <div className="text-2xl">+1 250-575-8422 </div>
        </div>
    </div>
    
     
    </div>
  );
};

export default ContactMe;