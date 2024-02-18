import React from 'react';
import TopContact from '../components/TopContact';
import ContactMe from '../components/ContactMe';
import GenIntro from '../components/GenIntro';
import GenWhiteBg from '../components/GenWhiteBg';
import GenWho from '../components/GenWho';

const ForRubyIndustries = () => {


  return(
    
  <div>
     <TopContact />
    <GenIntro care1="research" care2="data" care3="code" compName="Ruby Industries" compPoss="Ruby's"/>
    <GenWhiteBg headQuestion={"What will I bring to Ruby?"} firstHead={"Elegant Code"} 
    firstPar={`At my previous company, my swift issue resolutions boosted team productivity by 5%. My diligent peer reviews led to a 10% reduction in errors, and my commitment to refining the codebase cut down code duplication by 8%.
    `}
     secondHead={"Comprehensive Analysis"} secondPar={`I developed a data preprocessing system that streamlined team performance analysis, cutting project delays by 25% and enhancing client communication. My proficiency spans various data science tools, including Python, R, Tableau, and Excel, and I'm acquainted with Machine Learning research.
     `
     }
     thirdHead={"Superb Development"} thirdPar={`I elevated user interfaces for numerous clients, resulting in a 10% uptick in user satisfaction. For my Capstone Project, I developed and deployed over 20 responsive websites, boosting user engagement by 40%. My expertise in front-end (React, JavaScript, TypeScript) and back-end (MariaDB, PostgreSQL, Java) technologies enables me to deliver comprehensive solutions.
     `}
     />
    <GenWho myValues={"integrity, thoroughness, hard-work, collaboration, bravery, creativity, proactivity, open-mindedness, forward thinking, analytical thinking"}/>
    <GenWhiteBg headQuestion={"Why Ruby?"} firstHead={"Exemplary Data Research"} 
    firstPar={`I'm impressed by Ruby Industries' dedication to high-quality research and adherence to the CRISP-DM methodology, underscoring a serious approach to data analysis recognized by numerous prestigious clients. I'm eager to contribute to this rigorous scientific environment and enhance the actionable insights provided to your clients.`}
     secondHead={"Meaningful Projects"} secondPar={`I'm inspired by initiatives like Cityviz, which showcase not only your data science expertise but also a commitment to societal and economic development. Cityviz's provision of crucial economic insights reflects the tangible impact of your work on investment decisions. With my background in Economics, I'm keen to further enrich this impactful project.`}
     thirdHead={"Sustained Advancement"} thirdPar={`Ruby Industries' consistent growth and project enhancement, from winning the “BC Housing Data Visualization Challenge” in 2017 to earning the Technology and Innovation Key Business Award in 2022, is admirable. I'm excited about the prospect of joining such a dynamic team, learning from your experiences, and contributing my insights to propel Ruby Industries forward.`}
     />
    <ContactMe/>
  </div>
    
  )
};

export default ForRubyIndustries;