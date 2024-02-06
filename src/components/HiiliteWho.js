import React from 'react';
import gradPhoto from '../assets/grad_photo.png'; 
import LinkPhoto from '../assets/link_photo.png'; 

const HiiliteWho = () => {
  return (
    <div className="bg-black_bg text-white_bg py-6 grid grid-cols-2 px-10">
        <div className="flex flex-col">  
            <div className="relative font-head_text text-6xl mb-6 text-center group">
            <span className="text-blue_light relative text-8xl group-hover:animate-pulse motion-reduce:animate-none" style={{ left: '0.37em', zIndex: 10 }}>W</span>
            <span className="relative" style={{ zIndex: 20 }}>Who am I?</span>
            </div>
            <div className="flex flex-col space-y-4 font-body_text text-2xl text-wrap">
                <p>I am a skilled Full Stack Developer and Data Scientist with varied, real-life, commercial and academic experience. My focus is on using these technical skills to make a significant impact on user satisfaction, aiming to take on challenging roles that shape and improve final products. I’ve graduated from UBCO with a B.A. in Computer Science and a minor in Economics, and I am currently located in Kelowna.</p>
                <p> <span className="underline decoration-blue_light">My values include </span>: integrity, thoroughness, hard-work, striving for greatness, teamwork, bravery, creativity, proactivity</p>
            </div>
        </div>
    
    <div className="flex mx-auto mt-10">
    <img
          src={gradPhoto}
          alt="Liza's graduation"
          className="object-left justify-start items-start object-contain max-w-64 hover:max-w-72 transition-all duration-300 motion-reduce:transition-none motion-reduce:hover:max-w-64"
          style={{zIndex:20 }} // Adjust the size as needed
        />
    <img
          src={LinkPhoto}
          alt="Liza's LinkedIn Portrait"
          className="object-right justify-end items-end object-contain max-w-64 hover:max-w-72 transition-all duration-300 motion-reduce:transition-none motion-reduce:hover:max-w-64"
          style={{ zIndex:10 }} // Adjust the size as needed
        />
    </div>

     
    </div>
  );
};

export default HiiliteWho;