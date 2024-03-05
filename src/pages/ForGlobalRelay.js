import React from 'react';
import TopContact from '../components/TopContact';
import ContactMe from '../components/ContactMe';
import GenIntro from '../components/GenIntro';
import GenWhiteBg from '../components/GenWhiteBg';
import GenWho from '../components/GenWho';

const ForGlobalRelay = () => {


  return(
    
  <div>
     <TopContact />
    <GenIntro care1="security" care2="code" care3="data" compName="Global Relay" compPoss="Global Relay's"/>
    <GenWhiteBg headQuestion={"What will I bring to Global Relay"} firstHead={"Elegant Code"} 
    firstPar={`At my previous company, my swift issue resolutions boosted team productivity by 5%. My diligent peer reviews led to a 10% reduction in errors, and my commitment to refining the codebase cut down code duplication by 8%.
    `}
     secondHead={"Comprehensive Analysis"} secondPar={`I developed a data preprocessing system that streamlined team performance analysis, cutting project delays by 25% and enhancing client communication. My proficiency spans various data science tools, including Python, R, Tableau, and Excel, and I'm acquainted with Machine Learning research.
     `
     }
     thirdHead={"Superb Development"} thirdPar={`I elevated user interfaces for numerous clients, resulting in a 10% uptick in user satisfaction. For my Capstone Project, I developed and deployed over 20 responsive websites, boosting user engagement by 40%. My expertise in front-end (React, JavaScript, TypeScript) and back-end (MariaDB, PostgreSQL, Java) technologies enables me to deliver comprehensive solutions.
     `}
     />
    <GenWho myValues={"integrity, thoroughness, hard-work, forward-thinking, proactivity, collaboration, innovation, continuous learning, responsibility, strategic-thinking, respect"}/>
    <GenWhiteBg headQuestion={"Why Global Relay?"} firstHead={"Superior Compliance"} 
    firstPar={`I admire your commitment to enabling compliant communication within corporations. The tools you provide are exceptional. I am interested in compliant communication, as well as issues of privacy and security, and would love to contribute to Global Relay’s app and other technologies.
    `}
     secondHead={"Innovative Cloud Technologies"} secondPar={`Global Relay's integration of cloud storage with AI-powered insights is remarkable. I am eager to deepen my knowledge in cloud computing, an area of keen interest to me. Furthermore, my passion for data science and data-driven decision-making aligns perfectly with working on a product that synergizes both elements.
     `
     }
     thirdHead={"Continuous Growth"} thirdPar={`Global Relay's evolution from a small startup in 1999 to a powerhouse with over 1,600 employees and 20,000 clients is truly inspiring. I am eager to learn from your methods, business processes, and to collaborate with a motivated team. I would be thrilled to contribute to your sustained growth.
     `}
     />
    <ContactMe/>
  </div>
    
  )
};

export default ForGlobalRelay;