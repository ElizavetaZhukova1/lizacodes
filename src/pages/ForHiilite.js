
import React from 'react';
import TopContact from '../components/TopContact';
import ContactMe from '../components/ContactMe';
import GenIntro from '../components/GenIntro';
import GenWhiteBg from '../components/GenWhiteBg';
import GenWho from '../components/GenWho';

const ForHiilite = () => {


  return(
    
  <div>
     <TopContact />
    <GenIntro care1="website development" care2="data" care3="marketing" compName="Hiilite" compPoss="Hiilite's"/>
    <GenWhiteBg headQuestion={"What will I bring to Hiilite?"} firstHead={"Elegant Code"} 
    firstPar={`At my previous company, my swift issue resolutions boosted team productivity by 5%. My diligent peer reviews led to a 10% reduction in errors, and my commitment to refining the codebase cut down code duplication by 8%.
    `}
     secondHead={"Comprehensive Analysis"} secondPar={`I developed a data preprocessing system that streamlined team performance analysis, cutting project delays by 25% and enhancing client communication. My proficiency spans various data science tools, including Python, R, Tableau, and Excel, and I'm acquainted with Machine Learning research.
     `
     }
     thirdHead={"Superb Development"} thirdPar={`I elevated user interfaces for numerous clients, resulting in a 10% uptick in user satisfaction. For my Capstone Project, I developed and deployed over 20 responsive websites, boosting user engagement by 40%. My expertise in front-end (React, JavaScript, TypeScript) and back-end (MariaDB, PostgreSQL, Java) technologies enables me to deliver comprehensive solutions.
     `}
     />
    <GenWho myValues={"integrity, thoroughness, hard-work, collaboration, bravery, creativity, proactivity, open-mindedness, forward thinking, focus on results"}/>
    <GenWhiteBg headQuestion={"Why Hiilite?"} firstHead={"Bad-ass Innovation"} 
    firstPar={`I'm captivated by Hiilite's boldness and relentless pursuit of excellence, and I'm eager to join such a committed team! The brand rejuvenation for Rosebuds Designer Consignment Store particularly caught my eye for its effectiveness, elegance, and visual appeal. I'm excited about the prospect of contributing my UI/UX design and coding knowledge to similar transformative projects. 
    `}
     secondHead={"Expert Marketing"} secondPar={`I admire Hiilite's fearless approach to navigating marketing challenges across diverse industries and audiences. The Toto Travelling Out website overhaul and marketing initiative stand as a testament to Hiilite's exceptional marketing prowess. I'm keen to delve deeper into social media strategy and marketing with the Hiilite team, enhancing project codebases and engaging in comprehensive data analysis to uncover the most compelling solutions.
     `
     }
     thirdHead={"Continual Growth"} thirdPar={`Hiilite's recognition as the best marketing agency in Kelowna with the CCA award in 2024 is a testament to its potential for future expansion. I'm driven by swift growth and new challenges, and I'm confident that as a member of the Hiilite team, I can contribute to overcoming future hurdles! I thrive in collaborative environments and am excited to join forces with Hiilite's talented team to achieve new heights together.
     `}
     />
    <ContactMe/>
  </div>
    
  )
};

export default ForHiilite;