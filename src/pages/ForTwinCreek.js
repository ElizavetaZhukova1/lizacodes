import React from 'react';
import TopContact from '../components/TopContact';
import ContactMe from '../components/ContactMe';
import GenIntro from '../components/GenIntro';
import GenWhiteBg from '../components/GenWhiteBg';
import GenWho from '../components/GenWho';

const ForTwinCreek = () => {


  return(
    
  <div>
     <TopContact />
    <GenIntro care1="website development" care2="data" care3="marketing" compName="Twin Creek" compPoss="Twin Creek's"/>
    <GenWhiteBg headQuestion={"What will I bring to Twin Creek?"} firstHead={"Elegant Code"} 
    firstPar={`At my previous company, my swift issue resolutions boosted team productivity by 5%. My diligent peer reviews led to a 10% reduction in errors, and my commitment to refining the codebase cut down code duplication by 8%.
    `}
     secondHead={"Comprehensive Analysis"} secondPar={`I developed a data preprocessing system that streamlined team performance analysis, cutting project delays by 25% and enhancing client communication. My proficiency spans various data science tools, including Python, R, Tableau, and Excel, and I'm acquainted with Machine Learning research.
     `
     }
     thirdHead={"Superb Development"} thirdPar={`I elevated user interfaces for numerous clients, resulting in a 10% uptick in user satisfaction. For my Capstone Project, I developed and deployed over 20 responsive websites, boosting user engagement by 40%. My expertise in front-end (React, JavaScript, TypeScript) and back-end (MariaDB, PostgreSQL, Java) technologies enables me to deliver comprehensive solutions.
     `}
     />
    <GenWho myValues={"integrity, thoroughness, hard-work, collaboration, critical thinking, bravery, creativity, proactivity, open-mindedness, forward thinking, honesty, responsibility"}/>
    <GenWhiteBg headQuestion={"Why Twin Creek?"} firstHead={"Exemplary Web Design"} 
    firstPar={`The Scouts Canada case study exemplifies Twin Creek's exceptional ability to blend functionality with creativity, crafting engaging websites that encourage user interaction while supporting marketing campaigns to drive traffic. I'm drawn to this holistic, strategic approach and am eager to absorb and contribute to Twin Creek's web design prowess.
    `}
     secondHead={"In-depth Analysis"} secondPar={`The Kelowna Downtown Marina project highlights Twin Creek's proficiency in leveraging analytical tools to enhance client outcomes. I admire the strategic analysis underpinning the marketing efforts, which pinpoint and optimize key traffic sources while addressing client needs. My background in data science positions me well to augment Twin Creek's analytical capabilities.
     `
     }
     thirdHead={"Consistent Growth"} thirdPar={`Twin Creek's enduring presence in the industry for over 19 years, coupled with its track record of delivering significant ROI for clients, speaks volumes about its commitment to growth and innovation. I am inspired by the opportunity to learn from such a seasoned team and to contribute my unique insights to further our mutual success.
     `}
     />
    <ContactMe/>
  </div>
    
  )
};

export default ForTwinCreek;