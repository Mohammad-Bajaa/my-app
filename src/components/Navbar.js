import React from "react"
import ReactLogo from "../images/Bajaa/logo.png"
import './Navbar.css'
  export default function Navbar (props) {
    return (
        <header className={props.darkMode ? "nav dark-nav" : "nav"}>
          {/* <navbar className="my-nav">
            <ul className="nav-list">
              <li className="nav-item">My CV</li>
              <li className="nav-item">About Developer</li>
              <li className="nav-item">Contact Me</li>
            </ul>
          </navbar> */}
            <img className="react-logo" src = {ReactLogo} alt="react-logo"/>
            <h1 className={props.darkMode ? "project-name dark-h1" : "project-name"}> Work & Experience </h1>
            {/* <h3 className="project-description">Mohammad Hussain Bajaa</h3> */}
            <div className="dark-light-button" >
              <input type="checkbox" id="darkmode-toggle"/>
              <label id="darkmode-toggle-label" for="darkmode-toggle" onClick={props.toggleDarkMode}/>    
            </div>
        </header>
    )
  }