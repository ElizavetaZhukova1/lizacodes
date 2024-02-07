import React from 'react';

const GenLetterHead = ({firstLetter="W", headQuestion, textColour="black_bg"}) => {
  return (

     <div className="relative font-head_text text-6xl text-center mb-4 group">
      <span className="text-blue_light relative text-8xl group-hover:animate-pulse motion-reduce:animation-none" style={{ left: '0.37em', zIndex: 10 }}>{firstLetter}</span>
      <span className={`relative text-${textColour} `} style={{ zIndex: 20 }}>{headQuestion}</span>
    </div>
    
  );
};
export default GenLetterHead;
