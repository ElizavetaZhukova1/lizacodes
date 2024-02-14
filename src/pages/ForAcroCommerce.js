import React from 'react';
import TopContact from '../components/TopContact';
import ContactMe from '../components/ContactMe';
import GenIntro from '../components/GenIntro';
import GenWhiteBg from '../components/GenWhiteBg';
import GenWho from '../components/GenWho';

const ForAcroCommerce = () => {


  return(
    
  <div>
     <TopContact />
    <GenIntro care1="e-commerce" care2="code" care3="data" compName="Acro Commerce" compPoss="Acro's"/>
    <GenWhiteBg headQuestion={"What will I bring to Acro Commerce?"} firstHead={"Elegant Code"} 
    firstPar={`At my previous company, my swift issue resolutions boosted team productivity by 5%. My diligent peer reviews led to a 10% reduction in errors, and my commitment to refining the codebase cut down code duplication by 8%.
    `}
     secondHead={"Comprehensive Analysis"} secondPar={`I developed a data preprocessing system that streamlined team performance analysis, cutting project delays by 25% and enhancing client communication. My proficiency spans various data science tools, including Python, R, Tableau, and Excel, and I'm acquainted with Machine Learning research.
     `
     }
     thirdHead={"Superb Development"} thirdPar={`I elevated user interfaces for numerous clients, resulting in a 10% uptick in user satisfaction. For my Capstone Project, I developed and deployed over 20 responsive websites, boosting user engagement by 40%. My expertise in front-end (React, JavaScript, TypeScript) and back-end (MariaDB, PostgreSQL, Java) technologies enables me to deliver comprehensive solutions.
     `}
     />
    <GenWho myValues={"integrity, thoroughness, hard-work, forward-thinking, proactivity, collaboration, innovation, continuous learning, responsibility, strategic-thinking, respect"}/>
    <GenWhiteBg headQuestion={"Why Acro Commerce?"} firstHead={"Digital Transformation"} 
    firstPar={`I'm drawn to Acro Commerce's mission of aiding enterprise systems in minimizing time-to-market, complexity, and costs. The transformation of businesses into the digital age, exemplified by projects like the Government of Yukon Cannabis monitoring system, showcases your capability to navigate diverse challenges. I'm eager to contribute to such transformative digitization efforts.
    `}
     secondHead={"Innovative E-Architecture"} secondPar={`Acro Commerce's strides in revolutionizing Commerce Architecture, particularly through projects like Gesso, are truly inspirational. These initiatives demonstrate how Acro Commerce streamlines complexities, offering businesses greater agility in the digital realm. I'm excited about the opportunity to contribute to projects that deliver tangible benefits to clients.
     `
     }
     thirdHead={"Continuous Learning"} thirdPar={`Acro Commerce's longevity of over 25 years in the industry, coupled with its commitment to constant innovation, resonates with me. Insights from publications like "Eight essential ecommerce trends for retail & B2C" highlight Acro's dedication to research and data-driven improvement. I'm inspired by the prospect of joining a team that values knowledge and growth.
     `}
     />
    <ContactMe/>
  </div>
    
  )
};

export default ForAcroCommerce;