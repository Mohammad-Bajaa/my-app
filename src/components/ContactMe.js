import React from 'react';
import './ContactMe.css';

export default function ContactMe(props) {
    return(
  <div className={props.darkMode ? "cv-main-body cv-dark-main": "cv-main-body cv-light-main"}>
    <div className='contact-me--grid'>
        <div className='contact-me--grid-div contact-me--grid-div1'> 1 </div>
        <div className='contact-me--grid-div contact-me--grid-div2'> 2 </div>
        <div className='contact-me--grid-div contact-me--grid-div3'> 3 </div>
        <div className='contact-me--grid-div contact-me--grid-div4'> 4 </div>
        <div className='contact-me--grid-div contact-me--grid-div5'> 5 </div>
    </div>
 </div>

  )};

