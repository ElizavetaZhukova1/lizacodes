import React from 'react';
import TopContact from '../components/TopContact';
import ContactMe from '../components/ContactMe';
import GenIntro from '../components/GenIntro';
import GenWhiteBg from '../components/GenWhiteBg';
import GenWho from '../components/GenWho';

const ForGreenspace = () => {


  return(
    
  <div>
     <TopContact />
    <GenIntro care1="mental health" care2="data" care3="code" compName="Greenspace" compPoss="Greenspace's"/>
    <GenWhiteBg headQuestion={"What will I bring to Greenspace?"} firstHead={"Elegant Code"} 
    firstPar={`At my previous company, my swift issue resolutions boosted team productivity by 5%. My diligent peer reviews led to a 10% reduction in errors, and my commitment to refining the codebase cut down code duplication by 8%.
    `}
     secondHead={"Comprehensive Analysis"} secondPar={`I developed a data preprocessing system that streamlined team performance analysis, cutting project delays by 25% and enhancing client communication. My proficiency spans various data science tools, including Python, R, Tableau, and Excel, and I'm acquainted with Machine Learning research.
     `
     }
     thirdHead={"Superb Development"} thirdPar={`I elevated user interfaces for numerous clients, resulting in a 10% uptick in user satisfaction. For my Capstone Project, I developed and deployed over 20 responsive websites, boosting user engagement by 40%. My expertise in front-end (React, JavaScript, TypeScript) and back-end (MariaDB, PostgreSQL, Java) technologies enables me to deliver comprehensive solutions.
     `}
     />
    <GenWho myValues={"integrity, thoroughness, hard-work, proactivity, privacy, safety, balance, respect, collaboration, innovation, continuous learning, responsibility"}/>
    <GenWhiteBg headQuestion={"Why Greenspace?"} firstHead={"Dedication to Mental Health"} 
    firstPar={`I am deeply inspired by Greenspace's dedication to enhancing mental health care. Programs like MBC stand out for their significant benefits to both clients and practitioners. I'm passionate about contributing to such transformative initiatives, believing in their immense potential to better the mental well-being of our communities.
    `}
     secondHead={"Data-Driven Innovation"} secondPar={`Greenspace's serious approach to data, exemplified by the Pop Health Platform, resonates with me. The focus on data-driven solutions tailored to client needs is commendable. I am eager to contribute to Greenspace's ongoing research and development efforts, aiming to advance mental health care practices through insightful data analysis.
     `
     }
     thirdHead={"Commitment to Progress"} thirdPar={`Witnessing Greenspace's evolution since 2015, from its founding to its current impactful state, is truly motivating. This journey of continuous enhancement, making mental health care more data-informed and accessible, aligns with my values. I am excited about the possibility of joining Greenspace on its mission to broaden its reach and deepen its impact, exploring new horizons together with shared dedication and purpose.
     `}
     />
    <ContactMe/>
  </div>
    
  )
};

export default ForGreenspace;