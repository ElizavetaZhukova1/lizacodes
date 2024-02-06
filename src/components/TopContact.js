import React from 'react';
import flameRed from '../assets/Flame_red.svg'; // Replace with the path to your flame icon

const TopContact = () => {
  return (
    <div className="bg-white_bg text-black_bg font-hl_text text-base pt-2 fixed top-0 w-full z-50">
      <div className="max-w-screen-xl mx-auto px-4 justify-between items-center grid grid-cols-6">
        
          
          <img src={flameRed} alt="Flame" className="h-6 mr-2" />
          <div className="col-span-5 flex justify-between items-center px-8">
          <span>+1 250-575-8422  </span>
          <span>  |  </span>
          <span className="text-blue_dark text-lg">  elizavetazhukova57@gmail.com  </span>
          <span>  |  </span>
        <a href="https://www.linkedin.com/in/elizaveta-zhukova-computer-science/" className="hover:text-blue_light" target="_blank" rel="noopener noreferrer">
          linkedin.com/in/elizaveta-zhukova-computer-science/
        </a>
        </div>
        
      </div>
      <div className="h-0.5 w-full bg-blue_light mt-2"></div>
    </div>
  );
};

export default TopContact;
