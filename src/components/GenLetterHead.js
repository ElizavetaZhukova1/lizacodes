import React from 'react';

const GenLetterHead = ({firstLetter="W", headQuestion, textColour="black_bg"}) => {
  return (

     <div className="relative font-head_text md:text-6xl xs:max-md:text-3xl text-center mb-4 group">
      <span className="text-blue_light relative md:text-8xl xs:max-md:text-5xl group-hover:animate-pulse motion-reduce:animation-none" style={{ left: '0.37em', zIndex: 10 }}>{firstLetter}</span>
      <span className={`relative text-${textColour} `} style={{ zIndex: 20 }}>{headQuestion}</span>
    </div>
    
  );
};
export default GenLetterHead;
