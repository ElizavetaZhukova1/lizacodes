import React from 'react';
import codeBackground from '../assets/Code_bg_brighter.png'; // Make sure this path is correct

const GenBenOneSec = ({head, par}) => {
  return (
    
        <div className="text-center space-y-4 mx-6 group">
            <h3 className="font-head_text text-3xl mb-2 group-hover:text-4xl transition-all duration-300 motion-reduce:transition-none motion-reduce:group-hover:text-3xl">{head}</h3>
            <div className="bg-auto h-1.5 w-[60%] mx-auto" style={{ backgroundImage: `url(${codeBackground})` }} />
            <p className="font-body_text text-xl text-left text-wrap mt-2 group-hover:text-3xl transition-all duration-300 motion-reduce:transition-none motion-reduce:group-hover:text-xl">{par}</p>
        </div>


  );
};

export default GenBenOneSec;