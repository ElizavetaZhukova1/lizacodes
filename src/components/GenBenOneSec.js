import React from 'react';
import codeBackground from '../assets/Code_bg_brighter.png'; // Make sure this path is correct

const GenBenOneSec = ({head, par}) => {
  return (
    
        <div className="text-center space-y-4 md:mx-6 xs:max-md:mx-4 xs:max-md:pb-2 group">
            <h3 className="font-head_text md:text-3xl xs:max-md:text-xl mb-2 group-hover:md:text-4xl xs:max-md:group-hover:text-2xl transition-all duration-300 motion-reduce:transition-none motion-reduce:group-hover:md:text-3xl motion-reduce:group-hover:xs:max-md:text-3xl">{head}</h3>
            <div className="bg-auto md:h-1.5 xs:max-md:h-1 w-[60%] mx-auto" style={{ backgroundImage: `url(${codeBackground})` }} />
            <p className="font-body_text md:text-xl xs:max-md:text-md text-left text-wrap mt-2 group-hover:md:text-3xl group-hover:xs:max-md:text-xl transition-all duration-300 motion-reduce:transition-none motion-reduce:group-hover:md:text-xl motion-reduce:group-hover:xs:max-md:text-xl">{par}</p>
        </div>


  );
};

export default GenBenOneSec;