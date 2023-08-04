import React from 'react';
import TypingAnimation from './TypingAnimation'; 
import { Link } from 'react-scroll';
import './Frontpage.css';

const Frontpage = () => {
  return (
    <div className="container">
    
      <div className="animation-container">
        <TypingAnimation />
      </div>
      <h1 className="main-heading">Typing Challenge</h1>
      <p className="app-description">
        <b>Test your typing speed and accuracy with fun challenges!</b>
      </p>
      <Link to="type" smooth={true} offset={50} duration={900} >
      <button className="start-button">Start Typing</button>
      </Link>
      
    </div>
  );
};

export default Frontpage;
