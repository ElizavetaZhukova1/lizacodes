import React from 'react';
import GenLetterHead from './GenLetterHead.js';
import GenBenSections from './GenBenSections';

const GenWhiteBg = ({firstLetter="W", headQuestion, firstHead, firstPar, secondHead, secondPar, thirdHead, thirdPar}) => {
  return (
    <div className="bg-white_bg font-body_text text-black_bg py-6">
    <GenLetterHead firstLetter={firstLetter} headQuestion={headQuestion} />
    <GenBenSections firstHead={firstHead} firstPar={firstPar} secondHead={secondHead} secondPar={secondPar} thirdHead={thirdHead} thirdPar={thirdPar}/>
     
    </div>
  );
};

export default GenWhiteBg;