import React from 'react';
import TopContact from '../components/TopContact';
import ContactMe from '../components/ContactMe';
import GenIntro from '../components/GenIntro';
import GenWhiteBg from '../components/GenWhiteBg';
import GenWho from '../components/GenWho';

const ForImagineEverything = () => {


  return(
    
  <div>
     <TopContact />
    <GenIntro care1="EdTech" care2="code" care3="data" compName="Imagine Everything" compPoss="Imagine Everything's"/>
    <GenWhiteBg headQuestion={"What will I bring to Imagine Everything?"} firstHead={"Elegant Code"} 
    firstPar={`At my previous company, my swift issue resolutions boosted team productivity by 5%. My diligent peer reviews led to a 10% reduction in errors, and my commitment to refining the codebase cut down code duplication by 8%.
    `}
     secondHead={"Comprehensive Analysis"} secondPar={`I developed a data preprocessing system that streamlined team performance analysis, cutting project delays by 25% and enhancing client communication. My proficiency spans various data science tools, including Python, R, Tableau, and Excel, and I'm acquainted with Machine Learning research.
     `
     }
     thirdHead={"Superb Development"} thirdPar={`I elevated user interfaces for numerous clients, resulting in a 10% uptick in user satisfaction. For my Capstone Project, I developed and deployed over 20 responsive websites, boosting user engagement by 40%. My expertise in front-end (React, JavaScript, TypeScript) and back-end (MariaDB, PostgreSQL, Java) technologies enables me to deliver comprehensive solutions.
     `}
     />
    <GenWho myValues={"integrity, thoroughness, hard-work, collaboration, proactivity, open-mindedness, forward thinking, focus on results, accountability, transparency, innovation, strategic thinking"}/>
    <GenWhiteBg headQuestion={"Why Imagine Everything?"} firstHead={"Dedication to EdTech"} 
    firstPar={`I'm inspired by initiatives like Student Aware and am eager to contribute to enhancing student experiences through innovative coding solutions. My passion lies in collaborating on enterprise-level EdTech projects alongside K12 schools, as I see immense potential in EdTech to revolutionize the IT landscape.
    `}
     secondHead={"Exceptional Management Solutions"} secondPar={`I'm impressed by tools like Education Forms and Content Manager for their meaningful impact and demonstration of a deep understanding of client needs. Their ability to streamline complex challenges is something I admire and am keen to contribute to, aiming to bring order and efficiency to sophisticated systems.
     `
     }
     thirdHead={"Continuous Evolution"} thirdPar={`From the launch of Student Aware in 2018 to the development of Staff Forms in 2023, Imagine Everything's consistent innovation in educational solutions is remarkable. I'm enthusiastic about joining this journey of sustained growth and helping to advance the quality of tools for students and educators alike.
     `}
     />
    <ContactMe/>
  </div>
    
  )
};

export default ForImagineEverything;