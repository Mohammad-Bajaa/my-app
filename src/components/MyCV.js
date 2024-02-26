import React from 'react';
import './MyCV.css';

export default function MyCV(props) {
  function downloadCv(){
    var link = document.createElement('a');
    link.href = '/Files/Mohammad Bajaa-CV12.02.2024.pdf';
    link.download = 'Mohammad Bajaa-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log("downloaded successfully!")
  }
    return(
  <div className={props.darkMode ? "cv-main-body cv-dark-main": "cv-main-body cv-light-main"}>
    <div className='cv-grid-table'>
      <div className='cv-input-component'>
      <span className='cv-input-component-h2'>First Name: </span><span className='cv-input-component-span'>Mohammad</span>
    </div>
    <div className='cv-input-component'>
      <span className='cv-input-component-h2'>Second Name: </span><span className='cv-input-component-span'>Ali</span>  
    </div>
    <div className='cv-input-component'>
      <span className='cv-input-component-h2'>Last Name: </span><span className='cv-input-component-span'>Hussain Bajaa</span>  
    </div>
  </div>
    <span className='cv-input-component-h2'>CV: </span> <button onClick={downloadCv}>Download CV</button>
    
 </div>

  )};

