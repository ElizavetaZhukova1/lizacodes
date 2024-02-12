import React from 'react';
import codeBackground from '../assets/Code_bg_brighter.png';
import flameRed from '../assets/Flame_red.svg';
import flameBlue from '../assets/Flame_blue.svg';

const ContactMe = () => {
  return (
    <div className="bg-white_bg pb-8">
     <div className="bg-auto py-4 mb-8 text-center" style={{ backgroundImage: `url(${codeBackground})` }}>
      <span className="text-white_bg font-head_text md:text-6xl xs:max-md:text-4xl" >Contact Me</span>
    </div>
    
    <div className="flex flex-col space-y-6 text-black_bg font-hl_text text-left items-start md:ml-[15%] xs:max-md:ml-[7%]">
        <div className="flex space-x-4 text-end items-end group">
        <img src={flameRed} alt="Red Flame" className="md:h-12 xs:max-md:h-8 md:group-hover:h-16 xs:max-md:group-hover:h-12 transition-all duration-300 motion-reduce:transition-none xs:max-md:motion-reduce:group-hover:h-8 md:motion-reduce:group-hover:h-12" />
        <div className="md:text-3xl md:group-hover:text-4xl xs:max-md:text-xl xs:max-md:group-hover:text-2xl transition-all duration-300 motion-reduce:transition-none md:motion-reduce:group-hover:text-3xl xs:max-md:motion-reduce:group-hover:text-xl">elizavetazhukova57@gmail.com</div>
        </div>
        <div className="flex space-x-4 ml-1 md:text-end md:items-end md:justify-end xs:max-md:items-center group">
        <img src={flameBlue} alt="Blue Flame" className="md:h-7 xs:max-md:h-5 xs:max-md:group-hover:h-9 md:group-hover:h-11 transition-all duration-300 motion-reduce:transition-none md:motion-reduce:group-hover:h-7 xs:max-md:motion-reduce:group-hover:h-5" />
        <a href="https://www.linkedin.com/in/elizaveta-zhukova-computer-science/" className="hover:text-blue_light md:text-2xl xs:max-md:text-lg md:group-hover:text-3xl xs:max-md:group-hover:text-xl transition-all duration-300 motion-reduce:transition-none md:motion-reduce:group-hover:text-2xl xs:max-md:motion-reduce:group-hover:text-lg" target="_blank" rel="noopener noreferrer">
        linkedin.com/in/elizaveta-zhukova-computer-science/</a>
        </div>
        <div className="flex space-x-4 ml-1 md:text-end md:items-end xs:max-md:items-center group">
        <img src={flameBlue} alt="Blue Flame" className="md:h-7 xs:max-md:h-5 xs:max-md:group-hover:h-9 md:group-hover:h-11 transition-all duration-300 motion-reduce:transition-none md:motion-reduce:group-hover:h-7 xs:max-md:motion-reduce:group-hover:h-5" />
        <div className="md:text-2xl xs:max-md:text-lg md:group-hover:text-3xl xs:max-md:group-hover:text-xl transition-all duration-300 motion-reduce:transition-none md:motion-reduce:group-hover:text-2xl xs:max-md:motion-reduce:group-hover:text-lg">+1 250-575-8422 </div>
        </div>
    </div>
    
     
    </div>
  );
};

export default ContactMe;