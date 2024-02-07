import React from 'react';
import GenBenOneSec from './GenBenOneSec';

const GenBenSections = ({firstHead, firstPar, secondHead, secondPar, thirdHead, thirdPar}) => {
  return (
    
    <div className="flex justify-around items-start space-x-8 mx-10 mt-10 mb-4 text-black_bg">
        <GenBenOneSec head={firstHead} par={firstPar}/>
        <GenBenOneSec head={secondHead} par={secondPar}/>
        <GenBenOneSec head={thirdHead} par={thirdPar}/>
    </div>

  );
};

export default GenBenSections;