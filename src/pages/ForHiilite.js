
import React from 'react';
import { Link } from 'react-router-dom';
import TopContact from '../components/TopContact';
import HiiliteIntro from '../components/HiiliteIntro';
import HiiliteBring from "../components/HiiliteBring";
import HiiliteWho from "../components/HiiliteWho";
import HiiliteWhy from '../components/HiiliteWhy';
import ContactMe from '../components/ContactMe';

const ForHiilite = () => (
  <div>
     <TopContact />
    <HiiliteIntro />
    <HiiliteBring />
    <HiiliteWho />
    <HiiliteWhy/>
    <ContactMe/>
  </div>
);

export default ForHiilite;