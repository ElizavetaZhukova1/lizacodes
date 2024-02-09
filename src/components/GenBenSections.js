import React from 'react';
import GenBenOneSec from './GenBenOneSec';

const GenBenSections = ({firstHead, firstPar, secondHead, secondPar, thirdHead, thirdPar}) => {
  return (
    
    <div className="flex md:justify-around md:items-left xs:max-md:flex-col xs:max-md:justify-evenly xs:max-md:items-center xs:max-md:space-x-4 mx-10 mt-10 mb-4 text-black_bg">
        <GenBenOneSec head={firstHead} par={firstPar}/>
        <GenBenOneSec head={secondHead} par={secondPar}/>
        <GenBenOneSec head={thirdHead} par={thirdPar}/>
    </div>

  );
};

export default GenBenSections;