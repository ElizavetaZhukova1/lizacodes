import React from 'react';
import codeBackground from '../assets/Code_bg_brighter.png'; // Make sure this path is correct

const HiiliteBring = () => {
  return (
    <div className="bg-white_bg font-body_text text-black_bg py-6">
     <div className="relative font-head_text text-6xl text-center mb-4 group">
      <span className="text-blue_light relative text-8xl group-hover:animate-pulse motion-reduce:animation-none" style={{ left: '0.37em', zIndex: 10 }}>W</span>
      <span className="text-black_bg relative" style={{ zIndex: 20 }}>What will I bring to Hiilite?</span>
    </div>
    
    <div className="flex justify-around items-start space-x-8 mx-10 mt-10 mb-4 text-black_bg">
        <div className="text-center space-y-4 mx-6 group">
            <h3 className="font-head_text text-3xl mb-2 group-hover:text-4xl transition-all duration-300 motion-reduce:transition-none motion-reduce:group-hover:text-3xl">Clean code</h3>
            <div className="bg-auto h-1.5 w-[60%] mx-auto" style={{ backgroundImage: `url(${codeBackground})` }} />
            <p className="font-body_text text-xl text-left text-wrap mt-2 group-hover:text-3xl transition-all duration-300 motion-reduce:transition-none motion-reduce:group-hover:text-xl">In my previous company, my quick issue resolution led to a 5% increase in team productivity, my peer reviews reduced the amount of mistakes by 10% and my strive to clean up the code base decreased code repetition by 8%.</p>
        </div>
        <div className="text-center space-y-4 mx-6 group">
            <h3 className="font-head_text text-3xl group-hover:text-4xl mb-2 transition-all duration-300 motion-reduce:transition-none motion-reduce:group-hover:text-3xl">In-depth analysis</h3>
            <div className="bg-auto h-1.5 w-[60%] mx-auto" style={{ backgroundImage: `url(${codeBackground})` }} />
            <p className="font-body_text text-xl group-hover:text-3xl text-left text-wrap mt-2 transition-all duration-300 motion-reduce:transition-none motion-reduce:group-hover:text-xl">In my Capstone Project I Managed Quality Assurance for both backend and frontend, reducing bugs by 50% and boosting system performance by 30%.I am also well-versed in a multitude of data science tools such as Python, R, Tableau, Excel.</p>
        </div>
        <div className="text-center space-y-4 mx-6 group">
            <h3 className="font-head_text text-3xl mb-2 group-hover:text-4xl motion-reduce:transition-none motion-reduce:group-hover:text-3xl">Inspiring presentations</h3>
            <div className="bg-auto h-1.5 w-[60%] mx-auto" style={{ backgroundImage: `url(${codeBackground})` }} />
            <p className="font-body_text text-xl text-left text-wrap mt-2 group-hover:text-3xl transition-all duration-300 motion-reduce:transition-none motion-reduce:group-hover:text-xl">In my previous company I created a data preprocessing system to analyze team performance, and spearheaded the presentations for the clients, reducing project delays by 25% and improving client updates.</p>
        </div>
    </div>
    
     
    </div>
  );
};

export default HiiliteBring;