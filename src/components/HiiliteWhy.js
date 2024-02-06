import React from 'react';
import codeBackground from '../assets/Code_bg_brighter.png'; // Make sure this path is correct

const HiiliteWhy = () => {
  return (
    <div className="bg-white_bg font-body_text text-black_bg py-6">
     <div className="relative font-head_text text-6xl text-center mb-4">
      <span className="text-blue_light relative text-8xl" style={{ left: '0.37em', zIndex: 10 }}>W</span>
      <span className="text-black_bg relative" style={{ zIndex: 20 }}>Why Hiilite?</span>
    </div>
    
    <div className="flex justify-around items-start space-x-8 mx-10 mt-10 mb-4 text-black_bg">
        <div className="text-center space-y-4 mx-6">
            <h3 className="font-head_text text-3xl mb-2">Bad-assery</h3>
            <div className="bg-auto h-1.5 w-[60%] mx-auto" style={{ backgroundImage: `url(${codeBackground})` }} />
            <p className="font-body_text text-xl text-left text-wrap mt-2">I’m inspired by Hiilite’s bravery and everlasting strive for the best possible product and I would love to achieve the greatest peaks together! I specifically found the projects to be very creative and got inspired to work on similar initiatives.</p>
        </div>
        <div className="text-center space-y-4 mx-6">
            <h3 className="font-head_text text-3xl mb-2">Marketing</h3>
            <div className="bg-auto h-1.5 w-[60%] mx-auto" style={{ backgroundImage: `url(${codeBackground})` }} />
            <p className="font-body_text text-xl text-left text-wrap mt-2">I love Hiilite’s thorough and all-encompassing approach to marketing. I will be able to contribute to Hiilite’s code base and analysis hwile learning more about marketing and media management from the team.</p>
        </div>
        <div className="text-center space-y-4 mx-6">
            <h3 className="font-head_text text-3xl mb-2">Growth</h3>
            <div className="bg-auto h-1.5 w-[60%] mx-auto" style={{ backgroundImage: `url(${codeBackground})` }} />
            <p className="font-body_text text-xl text-left text-wrap mt-2">Hiilite is one of the fastest growing marketing companies in Kelowna, which gives a lot of opprotunities for career growth and for creating true innovation in marketing. I would be honoured to contribute to Hiilite’s growth.</p>
        </div>
    </div>
    
     
    </div>
  );
};

export default HiiliteWhy;