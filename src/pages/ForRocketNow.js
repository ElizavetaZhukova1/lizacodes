import React from 'react';
import TopContact from '../components/TopContact';
import ContactMe from '../components/ContactMe';
import GenIntro from '../components/GenIntro';
import GenWhiteBg from '../components/GenWhiteBg';
import GenWho from '../components/GenWho';

const ForRocketNow = () => {


  return(
    
  <div>
     <TopContact />
    <GenIntro care1="web3" care2="data" care3="marketing" compName="Rocket" compPoss="Rocket's"/>
    <GenWhiteBg headQuestion={"What will I bring to Rocket?"} firstHead={"Elegant Code"} 
    firstPar={`At my previous company, my swift issue resolutions boosted team productivity by 5%. My diligent peer reviews led to a 10% reduction in errors, and my commitment to refining the codebase cut down code duplication by 8%.
    `}
     secondHead={"Comprehensive Analysis"} secondPar={`I developed a data preprocessing system that streamlined team performance analysis, cutting project delays by 25% and enhancing client communication. My proficiency spans various data science tools, including Python, R, Tableau, and Excel, and I'm acquainted with Machine Learning research.
     `
     }
     thirdHead={"Superb Development"} thirdPar={`I elevated user interfaces for numerous clients, resulting in a 10% uptick in user satisfaction. For my Capstone Project, I developed and deployed over 20 responsive websites, boosting user engagement by 40%. My expertise in front-end (React, JavaScript, TypeScript) and back-end (MariaDB, PostgreSQL, Java) technologies enables me to deliver comprehensive solutions.
     `}
     />
    <GenWho myValues={"integrity, diligence, hard-work, authenticity, collaboration, bravery, creativity, proactivity, open-mindedness, forward thinking, focus on results"}/>
    <GenWhiteBg headQuestion={"Why Rocket?"} firstHead={"Web3 Innovation"} 
    firstPar={`I'm captivated by Rocket's dedication to future-forward technologies like Blockchain, the Metaverse, and Web3. Initiatives such as Rocket University highlight your commitment to not only embracing these advancements but also educating others about their potential. I share this enthusiasm and am eager to collaborate on similar projects, contributing to the spread of innovative ideas. 
    `}
     secondHead={"Strategic Marketing"} secondPar={`Rocket's systematic approach to online marketing, especially the 4-step process detailed on your website, showcases a deep commitment to data-driven strategies. This methodical approach, from defining target audiences to tailoring to their specific needs, resonates with my passion for marketing. I'm keen to delve deeper into Rocket’s established marketing strategies and contribute my insights.
     `
     }
     thirdHead={"Focus on Data"} thirdPar={`Rocket's focus on client success through data optimization is admirable. Your multi-channel attribution process is a testament to your thoroughness in achieving optimal outcomes. With my background in Data Science, I'm confident I can enhance your analytical capabilities and support RocketNow in driving client success in the competitive marketing landscape.
     `}
     />
    <ContactMe/>
  </div>
    
  )
};

export default ForRocketNow;