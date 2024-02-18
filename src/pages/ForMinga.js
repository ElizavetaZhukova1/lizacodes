import React from 'react';
import TopContact from '../components/TopContact';
import ContactMe from '../components/ContactMe';
import GenIntro from '../components/GenIntro';
import GenWhiteBg from '../components/GenWhiteBg';
import GenWho from '../components/GenWho';

const ForMinga = () => {


  return(
    
  <div>
     <TopContact />
    <GenIntro care1="education" care2="data" care3="code" compName="Minga" compPoss="Minga's"/>
    <GenWhiteBg headQuestion={"What will I bring to Minga?"} firstHead={"Elegant Code"} 
    firstPar={`At my previous company, my swift issue resolutions boosted team productivity by 5%. My diligent peer reviews led to a 10% reduction in errors, and my commitment to refining the codebase cut down code duplication by 8%.
    `}
     secondHead={"Comprehensive Analysis"} secondPar={`I developed a data preprocessing system that streamlined team performance analysis, cutting project delays by 25% and enhancing client communication. My proficiency spans various data science tools, including Python, R, Tableau, and Excel, and I'm acquainted with Machine Learning research.
     `
     }
     thirdHead={"Superb Development"} thirdPar={`I elevated user interfaces for numerous clients, resulting in a 10% uptick in user satisfaction. For my Capstone Project, I developed and deployed over 20 responsive websites, boosting user engagement by 40%. My expertise in front-end (React, JavaScript, TypeScript) and back-end (MariaDB, PostgreSQL, Java) technologies enables me to deliver comprehensive solutions.
     `}
     />
    <GenWho myValues={"integrity, thoroughness, accountability, transparency, collaboration, innovation, open-mindedness, forward thinking, proactivity, safety, inclusivity, strategic thinking"}/>
    <GenWhiteBg headQuestion={"Why Minga?"} firstHead={"Digital Transformation"} 
    firstPar={`I'm impressed by Minga's dedication to revolutionizing the educational process with its comprehensive platform for school administration, from check-ins to behavior reports. This reflects a genuine commitment to enhancing educators' efficiency and students' well-being. I'm eager to join forces with Minga's experts to further refine its offerings and contribute to the enrichment of future generations' education.`}
     secondHead={"Innovative Management Solutions"} secondPar={`Minga's Campus Management platform is a testament to the team's expertise, showcasing an effective system that not only economizes resources for schools but also ensures safety and security. I admire this blend of innovation and practicality and am keen to learn from Minga's seasoned professionals while adding my unique insights to the mix.`}
     thirdHead={"Proven Trustworthiness"} thirdPar={`Minga's reputable standing among over 1000 schools is commendable, underscoring a continuous journey of growth and innovation. Cases like balancing flexibility and security at Stamford High Open Campus highlight Minga's adaptive approach to diverse educational challenges. I'm drawn to this dynamic environment and motivated to be part of Minga's impactful journey in transforming educational experiences.`}
     />
    <ContactMe/>
  </div>
    
  )
};

export default ForMinga;