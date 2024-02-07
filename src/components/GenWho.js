import React from 'react';
import gradPhoto from '../assets/grad_photo.png'; 
import LinkPhoto from '../assets/link_photo.png'; 
import GenLetterHead from './GenLetterHead';

const GenWho = ({aboutMe=`I am a skilled Full Stack Developer and Data Scientist with varied, real-life, 
commercial and academic experience. My focus is on using these technical skills to make a significant 
impact on user satisfaction, aiming to take on challenging roles that shape and improve final products. 
I’ve graduated from UBCO with a B.A. in Computer Science and a minor in Economics, and I am currently 
located in Kelowna.`, myValues}) => {
  return (
    <div className="bg-black_bg text-white_bg py-6 grid grid-cols-2 px-10">
        <div className="flex flex-col">  
            <GenLetterHead headQuestion="Who am I?" textColour='white_bg'/>
            <div className="flex flex-col space-y-4 font-body_text text-2xl text-wrap">
                <p>{aboutMe}</p>
                <p> <span className="underline decoration-blue_light">My values include </span>: {myValues}</p>
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

export default GenWho;