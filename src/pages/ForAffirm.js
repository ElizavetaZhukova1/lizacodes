import React from 'react';
import TopContact from '../components/TopContact';
import ContactMe from '../components/ContactMe';
import GenIntro from '../components/GenIntro';
import GenWhiteBg from '../components/GenWhiteBg';
import GenWho from '../components/GenWho';

const ForAffirm = () => {


  return(
    
  <div>
     <TopContact />
    <GenIntro care1="finance" care2="code" care3="data" compName="Affirm" compPoss="Affirm's"/>
    <GenWhiteBg headQuestion={"What will I bring to Affirm?"} firstHead={"Elegant Code"} 
    firstPar={`At my previous company, my swift issue resolutions boosted team productivity by 5%. My diligent peer reviews led to a 10% reduction in errors, and my commitment to refining the codebase cut down code duplication by 8%.
    `}
     secondHead={"Comprehensive Analysis"} secondPar={`I developed a data preprocessing system that streamlined team performance analysis, cutting project delays by 25% and enhancing client communication. My proficiency spans various data science tools, including Python, R, Tableau, and Excel, and I'm acquainted with Machine Learning research.
     `
     }
     thirdHead={"Superb Development"} thirdPar={`I elevated user interfaces for numerous clients, resulting in a 10% uptick in user satisfaction. For my Capstone Project, I developed and deployed over 20 responsive websites, boosting user engagement by 40%. My expertise in front-end (React, JavaScript, TypeScript) and back-end (MariaDB, PostgreSQL, Java) technologies enables me to deliver comprehensive solutions.
     `}
     />
    <GenWho myValues={"integrity, thoroughness, hard-work, collaboration, proactivity, open-mindedness, forward thinking, focus on results, accountability, transparency, innovation, strategic thinking"}/>
    <GenWhiteBg headQuestion={"Why Affirm?"} firstHead={"Financial Foresight"} 
    firstPar={`Affirm's innovative approach in the finance sector showcases its foresight. I believe that technologies enabling users to control their payment options are the future. This strategy is not only advantageous for users but also represents a brilliant opportunity for the company. I'm eager to contribute to Affirm's mission and help enhance this vision.
    `}
     secondHead={"Superior Technology"} secondPar={`Affirm's global integration and comprehensive documentation illustrate its commitment to developer support and partnership growth. This accessibility signals a dedication to expansion and a commendable focus on collaboration. I admire this approach and am keen to contribute to Affirm's codebase, furthering its technological advancements.
     `
     }
     thirdHead={"Sustained Growth"} thirdPar={`Affirm's rapid expansion, facilitating over 17 million transactions without imposing late fees, is remarkable. This achievement reflects Affirm's expansive vision, ethical practices, and prioritization of user interests. Joining a company with such a transformative impact and commitment to growth is a splendid opportunity for making a difference in the financial sector.
     `}
     />
    <ContactMe/>
  </div>
    
  )
};

export default ForAffirm;