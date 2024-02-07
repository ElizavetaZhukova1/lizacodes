
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
    <GenIntro care1="code" care2="data" care3="marketing" compName="Hiilite" compPoss="Hiilite's"/>
    <GenWhiteBg headQuestion={"What will I bring to Hiilite?"} firstHead={"Clean code"} 
    firstPar={`In my previous company, my quick issue resolution led to a 5% increase in team productivity, 
    my peer reviews reduced the amount of mistakes by 10% and my strive to clean up the code base
     decreased code repetition by 8%.`}
     secondHead={"In-depth analysis"} secondPar={`In my Capstone Project I Managed Quality Assurance for both backend 
     and frontend, reducing bugs by 50% and boosting system performance by 30%. 
     I am also well-versed in a multitude of data science tools such as Python, R, Tableau, Excel.`
     }
     thirdHead={"Inspiring presentations"} thirdPar={`In my previous company I created a data preprocessing system 
     to analyze team performance, and spearheaded the presentations for the clients, 
     reducing project delays by 25% and improving client updates.`}
     />
    <GenWho myValues={"integrity, thoroughness, hard-work, striving for greatness, teamwork, bravery, creativity, proactivity."}/>
    <GenWhiteBg headQuestion={"Why Hiilite?"} firstHead={"Bad-assery"} 
    firstPar={`I’m inspired by Hiilite’s bravery and everlasting strive for the best possible product 
    and I would love to achieve the greatest peaks together! I specifically found the projects 
    to be very creative and got inspired to work on similar initiatives.`}
     secondHead={"Marketing"} secondPar={`I love Hiilite’s thorough and all-encompassing approach to marketing. 
     I will be able to contribute to Hiilite’s code base and analysis while learning more 
     about marketing and media management from the team.`
     }
     thirdHead={"Growth"} thirdPar={`Hiilite is one of the fastest growing marketing companies in Kelowna, 
     which gives a lot of opprotunities for career growth and for creating true innovation in marketing. 
     I would be honoured to contribute to Hiilite’s growth.`}
     />
    <ContactMe/>
  </div>
    
  )
};

export default ForHiilite;